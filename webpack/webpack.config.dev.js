const webpack = require('webpack');
const merge = require('webpack-merge');
const css = require('./modules/css-dev');
const devServer = require('./modules/dev-server');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, css, devServer, {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
