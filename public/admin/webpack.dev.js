const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // web 网站根目录
        contentBase: './compiled' ,
        host: '127.0.0.1' ,
        port: 10003 ,
        index: 'app.html' ,
    }
});