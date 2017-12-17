const jwt = require('../../services/jwt')

/**
 * Auth controller.
 *
 * @type {Object}
 */
module.exports = {
    /**
     * Login a user.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    getToken: (request, response) => {
        const token = jwt.sign({
            sub: request.user.id
        })

        return response.json({ data: { token } })
    },

    /**
     * Register a user.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    register: (request, response) => {
        // Ensure the account does not already exist. (exists in validation rule)
        // Hash the password. (set password mutator on entity)
        // Store the user. (via orm)
        // Return a token. (via orm.getToken)
    }
}
