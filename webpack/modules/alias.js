const utils = require('../utils');

module.exports = {
    resolve: {
        alias: {
            modules: utils.resolve('src/modules'),
            $assets: utils.resolve('src/assets')
        }
    }
};
