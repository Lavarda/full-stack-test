const express = require('express')

const UserController = require('../controllers/users')
const AuthController = require('../controllers/auth')

const routes = express.Router();

routes.post('/users', UserController.create)
routes.get('/users/list', UserController.list)
routes.patch('/users/:id/edit', UserController.edit)
routes.delete('/users/delete/:id', UserController.delete)

routes.post('/login', AuthController.login)

module.exports = routes