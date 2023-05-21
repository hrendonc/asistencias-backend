const {Router} = require('express')
//const router = Router()
const check = require('../components/check/network')


// Creating routes server
const routes = function (server) {
    server.use('/check', check)
}


module.exports = routes
