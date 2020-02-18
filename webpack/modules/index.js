const merge = require('webpack-merge');
const images = require('./images');
const alias = require('./alias');
const js = require('./js');
const plugins = require('./plugins');


module.exports = merge(
    alias,
    js,
    images,
    plugins);