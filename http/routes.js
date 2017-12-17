const { getListings, showListing, storeListing, updateListing, destroyListing } = require('./controllers/listingController')
const { getToken, register } = require('./controllers/authController')
const { getMe } = require('./controllers/userController')
const authJwt = require('./middleware/authenticatesJwt')
const authLocal = require('./middleware/authenticatesLocal')

/*
 * Routes.
 *
 * @param {Object} app Express application.
 */
module.exports = (app) => {

    // Auth.
    app.post('/api/v1/auth/token', authLocal, getToken)
    app.post('/api/v1/auth/register', register)

    // Users,
    app.get('/api/v1/users/me', authJwt, getMe)

    // Listings.
    app.get('/api/v1/listings', getListings)
    app.get('/api/v1/listings/:listing', showListing)
    app.post('/api/v1/listings', authJwt, storeListing)
    app.patch('/api/v1/listings/:listing', authJwt, updateListing)
    app.delete('/api/v1/listings/:listing', authJwt, destroyListing)

}
