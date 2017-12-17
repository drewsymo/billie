/**
 * User controller.
 *
 * @type {Object}
 */
module.exports = {
    /**
     * Get the logged in user.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    getMe: (request, response) => {
        return response.json({ data: request.user })
    },
}
