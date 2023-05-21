const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/responses')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

router.get('/', (req, res)=>{
    controller.getRegisters()
    .then(result =>{
        response.success(req, res, 200, result)
    })
    .catch(e =>{
        response.error(req, res, 400, 'Error interno', e.message)
    })
})

router.post('/', (req, res)=>{
    controller.addRegister(req.body)
    .then((msg) =>{
        response.success(req, res, 200, msg)
    })
    .catch(e=>{
        response.error(req, res, 400, 'Error interno.', e.message)
    })
})

router.put('/', (req, res)=>{
    controller.updateRegister(req.body)
    .then((msg) =>{
        response.success(req, res, 200, msg)
    })
    .catch(e=>{
        response.error(req, res, 400, 'Error interno.', e.message)
    })
})

module.exports = router