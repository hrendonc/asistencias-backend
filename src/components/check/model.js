const mongoose = require('mongoose')
const { Schema } = mongoose

const checkSchema = new Schema({
    fecha: String,
    in: String,
    out: String
})

module.exports = mongoose.model('Check', checkSchema)