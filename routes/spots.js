const express = require('express')
const spotsRouter = new express.Router()
const spots = require('../controllers/spots.js')
const verifyToken = require('../serverAuth').verifyToken

spotsRouter.get('/:id', spots.show)

spotsRouter.get('/', spots.index)
spotsRouter.post('/', spots.create)
spotsRouter.patch('/:id', spots.update)
spotsRouter.delete('/:id', spots.destroy)

spotsRouter.use(verifyToken)




module.exports = spotsRouter
