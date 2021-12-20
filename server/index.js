const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PeajesModel = require('./models/Peajes');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://daxter:ipeajes123@ipeajescluster.8lmtr.mongodb.net/iPeajes?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// Rutas para tabla peajes
app.post('/add-peaje', async (req, res) => {

    const consorcio = req.body.consorcio;
    const nombrePeaje = req.body.nombrePeaje;
    const latitud = req.body.latitud;
    const longitud = req.body.longitud;
    const vCategoriaUno = req.body.vCategoriaUno;
    const vCategoriaDos = req.body.vCategoriaDos;
    const vCategoriaTres = req.body.vCategoriaTres;
    const vCategoriaCuatro = req.body.vCategoriaCuatro;
    const vCategoriaCinco = req.body.vCategoriaCinco;

    const peaje = new PeajesModel({
        consorcio: consorcio, 
        nombrePeaje: nombrePeaje,
        latitud: latitud,
        longitud: longitud,
        vCategoriaUno: vCategoriaUno,
        vCategoriaDos: vCategoriaDos,
        vCategoriaTres: vCategoriaTres,
        vCategoriaCuatro: vCategoriaCuatro,
        vCategoriaCinco: vCategoriaCinco
    });

    try {
        await peaje.save();
        res.send('<h1>Dato insertado</h1>');
        console.log('====================================');
        console.log('peaje insertado');
        console.log('====================================');
    } catch (e) {
        console.log(e);
    }
});

app.get('/list-peaje', async (req, res) => {
    PeajesModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } 
        res.send(result);
    })
});

app.put('/update-peaje', async (req, res) => {

    const newNombrePeaje = req.body.newNombrePeaje;
    const newVCategoriaUno = req.body.newVCategoriaUno;
    const newVCategoriaDos = req.body.newVCategoriaDos;
    const newVCategoriaTres = req.body.newVCategoriaTres;
    const newVCategoriaCuatro = req.body.newVCategoriaCuatro;
    const newVCategoriaCinco = req.body.newVCategoriaCinco;
    const id = req.body.id;

    try {
        await PeajesModel.findById(id, (err, updatedPeaje) => {
            updatedPeaje.nombrePeaje = newNombrePeaje;
            updatedPeaje.vCategoriaUno = newVCategoriaUno;
            updatedPeaje.vCategoriaDos = newVCategoriaDos;
            updatedPeaje.vCategoriaTres = newVCategoriaTres;
            updatedPeaje.vCategoriaCuatro = newVCategoriaCuatro;
            updatedPeaje.vCategoriaCinco = newVCategoriaCinco;
            updatedPeaje.save();
            res.send('<h1>Peaje actualizado</h1>');
            console.log('====================================');
            console.log('Peaje actualizado');
            console.log('====================================');
        })
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});