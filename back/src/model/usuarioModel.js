const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    estadoCivil: Boolean
})

module.exports = mongoose.model('usuario', UsuarioSchema)