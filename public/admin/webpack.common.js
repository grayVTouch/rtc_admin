const path = require('path');
// 使用了 clean-webpack-plugin & html-webpack-plugin 插件后
// 结合 webpack-dev-server 进行开发时，编译后文件会常驻内存
// 且 ./dist 目录会被删除！！
// 也就是说会发生 dist 目录消失的现象。
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        // babel-polyfill，在 ie 环境下，vuex 需要用到！
        // 相关文档请看 babel 官方文档
        app_v7: ['@babel/polyfill' , './source/app.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'RTC' ,
            filename: 'app.html' ,
            template: 'template.html'
        }) ,
        new VueLoaderPlugin() ,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'compiled')
    } ,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader' ,
                        options: {
                            presets: ["@babel/preset-env"] ,
                            plugins: [
                                // 提升运行速度 详情请查看 https://webpack.js.org/loaders/babel-loader/#root
                                '@babel/plugin-transform-runtime' ,
                                // 支持动态导入语法
                                '@babel/plugin-syntax-dynamic-import' ,
                                // view-design 按需引入
                                [
                                    "import",
                                    {
                                        "libraryName": "view-design",
                                        "libraryDirectory": "src/components"
                                    }
                                ]
                            ]
                        }
                    }
                ]
            } ,
            {
                // test: /\.s?[ac]ss$/,
                test: /\.css$/ ,
                use: [
                    MiniCssExtractPlugin.loader ,
                    // 'vue-style-loader' ,
                    // 'style-loader' ,
                    {
                        loader: 'css-loader' ,
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            } ,
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        // loader: 'file-loader' ,
                        loader: 'url-loader' ,
                        options: {
                            name: 'assets/[name].[ext]'
                        }

                    }
                ]
            } ,
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            } ,
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            } ,
            {
                test: /\.xml$/ ,
                use: [
                    'xml-loader'
                ]
            } ,
            {
                test: /\.vue$/ ,
                loader: 'vue-loader'
            }
        ]
    } ,
    // 相关依赖
    // 简化导入
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js' ,
            'vue-router': 'vue-router/dist/vue-router.esm.js' ,
            'vuex': 'vuex/dist/vuex.esm.js' ,
        }
    }
};