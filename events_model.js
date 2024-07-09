const dev_config = (process.env.vercel === undefined) ? require('./devConfig.js') : undefined;
const MongoClient = require('mongodb').MongoClient;
const db_uri = process.env.db_url || dev_config.dev_db_Url;
const client = new MongoClient(db_uri);
const collection = client.db("events").collection("events_data");

async function dbReadAll() {
    await client.connect();
    let all = await collection.find().sort({ _id: 1 }).toArray();
    client.close();
    return all;
}

async function dbUpdate(events) {
    await client.connect();
    const options = { ordered: false, forceServerObjectId: true };

    await collection.deleteMany({}); // First empty the collection
    await collection.insertMany(events, options);
    client.close();
}

module.exports = {
    dbReadAll,
    dbUpdate
}