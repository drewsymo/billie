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
     * @param  {string} parameter Parameter to retreive.
     * @return {mixed}
     */
    config: (parameter) => {
        return dot.pick(parameter, require('./config'))
    }
}
