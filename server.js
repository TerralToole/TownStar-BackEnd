const express = require('express')
const app = express()
const bodyPasrer = require('body-parser')
const cors = require('cors');
const fs = require('fs');

const PORT = 3000


app.use(express.static('public'));
app.use(bodyPasrer.json());
app.use(bodyPasrer.urlencoded());


app.get('/api/crafting', (req, res) => {
    const craftingData = require("./town-star-data/CraftsData.json");

    res.json(craftingData);
});

app.get('/api/objects', (req, res) => {
    const ObjectsData = require("./town-star-data/ObjectsData.json");
    res.json(ObjectsData);
});

app.get('/api/units', (req, res) => {
    const UnitsData = require("./town-star-data/UnitsData.json");
    res.json(UnitsData);
});

app.post('/api/crafting', (req, res) => {
    const craftingData = req.body;
    console.log('Crafting Data: ', craftingData);
    fs.writeFileSync('town-star-data/CraftsData.json', JSON.stringify(craftingData));
    res.send(craftingData);
});

app.post('/api/objects', (req, res) => {
    const objectsData = req.body;
    console.log('Objects Data: ', objectsData);
    fs.writeFileSync('town-star-data/ObjectsData.json', JSON.stringify(objectsData));
    res.send(objectsData);
});

app.post('/api/units', (req, res) => {
    const unitsData = req.body;
    console.log('Units Data: ', unitsData);
    fs.writeFileSync('town-star-data/UnitsData.json', JSON.stringify(unitsData));
    res.send(unitsData);
});

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))