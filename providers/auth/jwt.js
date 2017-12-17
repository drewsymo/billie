const { Strategy, ExtractJwt } = require('passport-jwt')
const passport = require('passport')
const { config } = require('../../helpers')

module.exports = (app) => {

    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config('jwt.secret')
    }

    passport.use(new Strategy(opts, function(payload, callback) {
        return callback(null, {
            payload
        })
    }));

}
