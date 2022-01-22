const express = require('express')

const BeerControllers = require('../controllers/beers')

const routes = express.Router();

routes.get('/beers', BeerControllers.getAllBeers)
routes.get('/beer/:id', BeerControllers.getBeer)

module.exports = routes