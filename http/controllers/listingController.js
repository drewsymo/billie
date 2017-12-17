/**
 * Listing controller.
 * @type {Object}
 */
module.exports = {
    /**
     * Get a listing of the resource.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    getListings: (request, response) => {
        return response.json({
            data: [
                {}
            ]
        })
    },

    /**
     * Display the requested resource.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    showListing: (request, response) => {
        return response.json({
            data: {}
        })
    },

    /**
     * Update the requested resource in storage.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    updateListing: (request, response) => {
        return response.json({
            data: {}
        })
    },

    /**
     * Store the requested resource in storage.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    storeListing: (request, response) => {
        return response.status(201).json({
            data: {}
        })
    },

    /**
     * Destroy the requested resource in storage.
     *
     * @param  {[type]} request  [description]
     * @param  {[type]} response [description]
     * @return {[type]}          [description]
     */
    destroyListing: (request, response) => {
        return request.status(204);
    }
}
