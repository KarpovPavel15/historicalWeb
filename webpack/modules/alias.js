const utils = require('../utils');

module.exports = {
    resolve: {
        alias: {
            modules: utils.resolve('src/modules'),
            shared: utils.resolve('src/shared'),
            $assets: utils.resolve('src/assets'),
            rootRoute: utils.resolve('src/rootRoute'),
        }
    }
};
