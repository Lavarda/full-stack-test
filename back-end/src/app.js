const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const users = require('../src/routes/users')
const beers = require('../src/routes/beer')

require('dotenv').config()

require('./database/connection')
require('events').EventEmitter.defaultMaxListeners = 5000

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(users)
app.use(beers)

app.listen(process.env.PORT || PORT, HOST)