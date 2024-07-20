const cheerio = require('cheerio');

const { HEADERS, WEEKDAYS } = require('./config.js');
const dbUpdate = require('./events_model.js').dbUpdate;

const pagesList = require('./pages-list.js');

async function cheerioFetch(url, page_name) {
    const currEvents = [];

    await fetch(url, { HEADERS })
        .then(res => res.text())
        .then(htmlResponse => {
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
                        if (!jeruEvent.node.event_place.location.reverse_geocode.city.includes('ירושלים')) {
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

                } else {
                    console.log("No upcoming events found.");
                }
            }
        });
    return currEvents // Return for the loopScan
}

async function loopScan() {

    let events = [];

    for (const page of pagesList) {
        try {
            let page_events = await cheerioFetch(page.page_url, page.name);
            if (page_events[0]) events = events.concat(page_events);
        } catch (e) {
            console.log(e);
            continue;
        }
    }

    if (events.length > 3) { // Only if enough data - (Because we are empty the db);
        events = shortSortByDate(events);
        dbUpdate(events);
    }
};

function splitContinualEvents(evs) {
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return [evs].flatMap(ev => {
        const [start, end] = ev.date.split(' - ').map(d => d.trim().split(' '));
        const startDate = new Date(Date.UTC(2023, MONTHS.indexOf(start[2]), start[1]));
        const endDate = new Date(Date.UTC(2023, MONTHS.indexOf(end[2]), end[1]));
        const days = [];

        for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            const day = d.getDate();
            const month = MONTHS[d.getMonth()];
            const weekday = WEEKDAYS[d.getDay()];

            if (days.length >= 2) {
                days.push({
                    id: `${ev.id}_${days.length}`,
                    title: ev.title,
                    by: ev.by,
                    date: `${weekday}, ${day} ${month}`,
                    location: ev.location,
                    link: ev.link,
                    img: ev.img,
                });
            }
        }

        return days.length > 0 ? days : [ev];
    });
}

function shortSortByDate(evs) {
    evs = splitContinualEvents(evs);
    const happeningNowEvents = evs.filter(ev => ev.date.includes('HAPPENING NOW') || ev.date.includes('TODAY'));
    const tomorrowEvents = evs.filter(ev => ev.date.includes('TOMORROW'));
    const otherEvents = evs.filter(ev => !ev.date.includes('HAPPENING NOW') && !ev.date.includes('TODAY') && !ev.date.includes('TOMORROW')
        // && !ev.date.includes('-')
    ); // For now hide also the continual events by '-' sign (Format: TUE, JUL 16 - JUL 23)

    otherEvents.sort((a, b) => {
        const dateA = a.date.split(', ')[1].split(' AT ')[0].trim();
        const dateB = b.date.split(', ')[1].split(' AT ')[0].trim();
        return new Date(dateB) - new Date(dateA);
    });
    otherEvents.reverse();
    // const sortedEvents = [...happeningNowEvents, ...tomorrowEvents, ...otherEvents];
    const sortedEvents = [...otherEvents];

    return sortedEvents;
}

// loopScan();

module.exports = loopScan;