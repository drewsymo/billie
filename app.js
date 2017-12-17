// Setup dependencies.
require('dotenv').config()
const express = require('express')
const app = express()
const { config } = require('./helpers')

// Configure application providers.
app.use(require('body-parser').json())
require('./http/routes')(app)
require('./providers/auth')(app)

// Start server.
app.listen(config('server.port'), () => console.info(
    `Started Billie at http://localhost:${config('server.port')}`
))
