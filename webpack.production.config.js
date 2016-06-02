/**
 * Created by Thelv on 01/06/2016.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/main/resources/source/main.js",
    output: {
        path: __dirname + "/src/main/resources/static/",
        filename: "js/bundle-[hash].js"
    },

    module: {
        loaders: [
            {
                test:   /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', '!css?modules')
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyleft ~ Thaelvyn @ 2016"),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/main/resources/source/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("css/style-[hash].css")
    ]
};