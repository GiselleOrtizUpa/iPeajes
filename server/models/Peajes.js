const mongoose = require('mongoose');

const PeajesSchema = new mongoose.Schema({
    consorcio: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    // latitud: {
    //     type: Number,
    //     required: true,
    // },
    // longitud: {
    //     type: Number,
    //     required: true,
    // },
    // vCategoriaUno: {
    //     type: Number,
    //     required: true,
    // },
    // vCategoriaDos: {
    //     type: Number,
    //     required: true,
    // },
    // vCategoriaTres: {
    //     type: Number,
    //     required: true,
    // },
    // vCategoriaCuatro: {
    //     type: Number,
    //     required: true,
    // },
    // vCategoriaCinco: {
    //     type: Number,
    //     required: true,
    // },
});

const Peajes = mongoose.model('peajes', PeajesSchema);

module.exports = Peajes;