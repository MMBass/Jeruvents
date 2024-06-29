
// CONVERT utf16 :
const utf16Regex = /\\u([0-9a-fA-F]{4})/g;
const replaceFn = (match, hex) => {
    const codePoint = parseInt(hex, 16);
    return String.fromCharCode(codePoint);
};
const utf16String = "\u0041\u1F60A"; // 'A' and emoji with UTF-16 escape
const utf16ToUtf8String = utf16String.replace(utf16Regex, replaceFn);
console.log(utf16ToUtf8String); // Output: 'A' (emoji in UTF-8)

// puppeeter scan: 
const scan = async (page_url, page_name) => {
    console.log(page_url);
    const page = await browser.newPage();

    await page.goto(page_url, { timeout: 3 * 1000 });
    await page.setViewport({ width: 1080, height: 2000 });
    await page.waitForTimeout(3000);

    const elements = await page.waitForSelector(
        '.x78zum5.x1q0g3np.x1a02dak.x1qughib',
        { timeout: 3000 }
    );

    let events = await page.$$eval(
        'div.x6s0dn4.x1lq5wgf.xgqcy7u.x30kzoy',
        (eventsCards) => {
            return eventsCards.map(card => {
                if (card.querySelectorAll('.x1ok221b ')[0] !== null && card.textContent) {
                    const date = card.querySelectorAll('.x1ok221b > span')[0];
                    const title = card.querySelectorAll('.x1ok221b > span')[1];
                    const location = card.querySelectorAll('.x1ok221b > span')[2].querySelectorAll('a')[0];
                    const link = card.querySelectorAll('.x1ok221b a')[0].getAttribute('href');
                    const img = card.querySelectorAll('img')[0].getAttribute('src');

                    const toText = (element) => element && element.textContent.trim();

                    if (toText(date).includes('-')) return;

                    return {
                        title: toText(title),
                        date: toText(date),
                        location: toText(location),
                        link,
                        img,
                    };
                } else {
                    return;
                }
            });
        });
    console.log(events);
    events = events.filter(n => n) // remove falsi/empty elements

    events = Array.from(new Set(events.map(obj =>
        JSON.stringify(obj)))).map(str => JSON.parse(str)); //remove duplicates

    events.map((obj) => {
        obj._id = sha1(obj.title + obj.date);
    }); // create hash id for each event, to compare in future

    await page.close();

    return events;
};