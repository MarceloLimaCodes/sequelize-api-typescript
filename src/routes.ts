const express = require('express')

const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.post('/user', UserController.criar)

module.exports = routes