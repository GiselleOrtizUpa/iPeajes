const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PeajesModel = require('./models/Peajes');

app.use(express.json());

mongoose.connect('mongodb+srv://daxter:ipeajes123@ipeajescluster.8lmtr.mongodb.net/iPeajes?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get('/', async (req, res) => {
    const peaje = new PeajesModel({ consorcio: 'algo', nombre: 'asynco' });
    try {
        await peaje.save();
        res.send('<h1>Dato insertado</h1>');
    } catch (e) {
        console.log(e);
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});