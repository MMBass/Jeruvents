const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

const scanService = require('./scan_service');
const dbReadAll = require('./events_model').dbReadAll;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/events', async (req, res) => {
    let results = await dbReadAll();
    res.send(results);
});

// Won't work on free Vercel - There is a Time limit for function
app.get('/scan', async (req, res) => {
    res.send('Scan start'); 
    scanService();
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app listening at port ${PORT}...`));