const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

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
    scanService();
    console.log('Scan completed');
});

async function dbReadAll() {
    await client.connect();
    let all = await collection.find().sort({ _id: 1 }).toArray();
    client.close();
    return all;
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app listening at port ${PORT}...`));