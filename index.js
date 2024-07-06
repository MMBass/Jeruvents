const express = require('express');
// require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

const cheerio = require('cheerio');

const scanService = require('./scan');

app.use(helmet());
app.use(cors());
app.use(express.json());

const dev_config = (process.env.vercel === undefined) ? require('./devConfig') : undefined;
const MongoClient = require('mongodb').MongoClient;
const db_uri = process.env.db_url || dev_config.dev_db_Url;

const client = new MongoClient(db_uri);
const collection = client.db("events").collection("events_data");

app.get('/events', async (req, res) => {
    let results = await dbReadAll();
    res.send(results);
});

app.get('/scan', async (req, res) => {
    console.log('Scan start');
    res.send('Scan start');
    loopScan();
    console.log('Scan completed');
});

async function dbReadAll() {
    await client.connect();
    let all = await collection.find().sort({ _id: 1 }).toArray();
    client.close();
    return all;
}

const pagesList = require('./pages-list.js');

async function cheerioFetch(url, page_name) {
    const currEvents = [];

    const headers = {
        redirect: 'manual',
        'authority': 'www.facebook.com',
        'method': 'GET',
        'path': '/Mazkeka/upcoming_hosted_events',
        'scheme': 'https',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        // 'Accept-Encoding': 'gzip, deflate, br, zstd', 
        'Accept-Language': 'en-US,en;q=0.9',
        'Dnt': '1',
        'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
    
    await fetch(url, { headers })
        .then(res => res.text())
        .then(htmlResponse => {
            // fs.writeFileSync('test.html', htmlResponse);
            const $ = cheerio.load(htmlResponse); // Load the HTML into Cheerio

            let scriptWithPageItems = null;
            $('script[type="application/json"]').each(function () {
                const jsonString = $(this).text();
                if (jsonString.includes('"Upcoming"') && jsonString.includes('"pageItems"')) {
                    scriptWithPageItems = jsonString;

                    return false; // Early exit after finding a match
                }
            });

            if (!scriptWithPageItems?.length) {
                console.info("Script element not found for page: " + page_name);
            } else {
                const jsonString = scriptWithPageItems;
                try {
                    const jsonData = JSON.parse(jsonString);
                    function findAndLogProperty(obj, propertyName) {
                        if (obj && typeof obj === 'object') {
                            for (const key in obj) {
                                if (key === propertyName) {
                                    pushItems(obj[key]);
                                    return; // Found the property, stop recursion
                                } else if (typeof obj[key] === 'object') {
                                    findAndLogProperty(obj[key], propertyName); // Recurse into nested objects
                                }
                            }
                        }
                    }
                    // const pageItems = jsonData.result.data.node.section_actions_renderer.all_collections.nodes[0].style_renderer.collection.pageItems; // Not the correct path
                    findAndLogProperty(jsonData, 'pageItems');
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    // Handle error: JSON parsing failed
                }
            }

            function pushItems(pageItems) {
                if (pageItems && pageItems.edges) {
                    pageItems.edges.forEach(jeruEvent => {
                        jeruEvent = jeruEvent.node
            
                        if (jeruEvent.node.day_time_sentence.includes('MORE')) {
                            // Skip repeated events, they are anyway once already in the page
                            return
                        }
                        if(!jeruEvent.node.event_place.location.reverse_geocode.city.includes('ירושלים')){
                            return
                        }

                        currEvents.push(
                            {
                                id: jeruEvent.id,
                                title: jeruEvent.node.name + " 01 ",
                                by: jeruEvent.node.event_creator.name,
                                date: jeruEvent.node.day_time_sentence,
                                location: jeruEvent.node.event_place.contextual_name,
                                link: jeruEvent.url,
                                img: jeruEvent.image.uri,
                            }
                        )
                    })

                    Array.from(new Set(currEvents.map(obj =>
                        JSON.stringify(obj)))).map(str => JSON.parse(str)); // Remove duplicates

                    // If Html res already contains ids
                    // events.map((obj) => {
                    //     obj._id = sha1(obj.title + obj.date);
                    // }); // create hash id for each event, to compare in future

                } else {
                    console.log("No upcoming events found.");
                }
            }
        });
    return currEvents // Return for the loopScan
}

async function dbUpdate(events) {
    // fs.writeFileSync('events.json', JSON.stringify(events));
    await client.connect();
    const options = { ordered: false, forceServerObjectId: true };

    await collection.deleteMany({}); // Empty the collection first
    await collection.insertMany(events, options);
    client.close();
}

async function loopScan() {

    let events = [];
    console.log(pagesList);
    for (const page of pagesList) {
        try {
            let page_events = await cheerioFetch(page.page_url, page.name);
            if (page_events[0]) events = events.concat(page_events);
        } catch (e) {
            // todo catch err
            console.log(e);
            continue;
        }
    }

    if (events.length > 3) { // Only if enough data - (cause we gonna empty the db);
        events = shortSortByDate(events);
        dbUpdate(events);
    }
};

function shortSortByDate(evs) {
    // TODO in future detect also Year, if it's reffer for next JAN for example
    // detect if the month is DEC and ther's an events are from next JAN?
    const happeningNowEvents = evs.filter(ev => ev.date.includes('HAPPENING NOW') || ev.date.includes('TODAY'));
    const tomorrowEvents = evs.filter(ev => ev.date.includes('TOMORROW'));
    const otherEvents = evs.filter(ev => !ev.date.includes('HAPPENING NOW') && !ev.date.includes('TODAY') && !ev.date.includes('TOMORROW'));

    otherEvents.sort((a, b) => {
        const dateA = a.date.split(', ')[1].split(' AT ')[0].trim();
        const dateB = b.date.split(', ')[1].split(' AT ')[0].trim();
        return new Date(dateB) - new Date(dateA);
    });
    otherEvents.reverse();
    const sortedEvents = [...happeningNowEvents, ...tomorrowEvents, ...otherEvents];

    return sortedEvents;
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app listening at port ${PORT}...`));