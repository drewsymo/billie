const { Strategy, ExtractJwt } = require('passport-jwt')
const passport = require('passport')
const { config } = require('../../helpers')
const { User } = require('../../models')

module.exports = (app) => {

    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config('jwt.secret')
    }

    passport.use(new Strategy(opts, function(payload, callback) {
        console.log(payload)
        User.findById(payload.sub).then(user => {
            return callback(null, user)
        })
    }));

}
