const jwt = require('jsonwebtoken')
const { config } = require('../helpers')

module.exports = {
    /**
     * Sign a payload.
     *
     * @param  {[type]} payload [description]
     * @return {[type]}         [description]
     */
    sign: (payload) => {
        return jwt.sign(payload, config('jwt.secret'), {
            expiresIn: 60
        })
    }
}
