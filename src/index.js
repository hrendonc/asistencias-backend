const express = require('express')
const router = require('./network/routes')
require('dotenv').config()
var cors = require('cors')

// Data Base
const db = require('./db')
db()

const app = express()
app.use(cors({ 'access-control-allow-origin': '*' }))

//Obtener datos del cliente (BODY & QUERY)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// Static files
app.use('/', express.static(__dirname + '/public'));

// Routes Module
router(app)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
