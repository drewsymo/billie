const express = require('express')
const app = express()
const { config } = require('./helpers')

app.use(require('body-parser').json())
require('./http/routes')(app)
require('./providers/auth')(app)

app.listen(config('server.port'))
