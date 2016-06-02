/**
 * Created by Thelv on 01/06/2016.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main/resources/source/main.js",
    output: {
        path: __dirname + "/src/main/resources/static/",
        filename: "js/bundle.js"
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
                loader: 'style!css?modules'
            }
        ]  
    },
    
    plugins: [
        new webpack.BannerPlugin("Copyleft ~ Thaelvyn @ 2016"),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/main/resources/source/index.tmpl.html",
            // filename: __dirname + "/src/main/resources/static/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: __dirname + "/src/main/resources/static",
        port: 8000,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};
