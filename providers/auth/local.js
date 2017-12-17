const { Strategy, ExtractJwt } = require('passport-local')
const passport = require('passport')
const { config } = require('../../helpers')
const { User } = require('../../models')

const opts = {
    usernameField: 'email',
    passwordField: 'password',
    session: false
}

module.exports = (app) => {
    passport.use(new Strategy(opts, function(email, password, callback) {
        // Find the user.
        User.findOne( { where: { email } } ).then(user => {
            // @todo Verify the password etc.
            return callback(null, user)
        })
    }))
}
