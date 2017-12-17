const dot = require('dot-object');

/**
 * Helpers.
 *
 * @type {Object}
 */
module.exports = {
    /**
     * Get a configuration value.
     *
     * You can use dot notation to retrieve a value, e.g. server.port.
     *
     * @todo Group by filename and then config, e.g. database.host (database.js/host{})
     *
     * @param  {string} parameter Parameter to retreive.
     * @return {mixed}
     */
    config: (parameter) => dot.pick(parameter, require('./config/app'))
}
