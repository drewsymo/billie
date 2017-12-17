const local = require('./local.js')
const jwt = require('./jwt.js')

module.exports = (app) => {
    local(app)
    jwt(app)
}
