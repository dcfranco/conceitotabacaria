const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './app/index.jsx'],
    target: 'electron-main',
    devtool: 'source-map',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 5000,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/build/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015', 'react', 'es2017'],
                plugins: ['transform-object-rest-spread', 'transform-async-to-generator']
            },
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg|.jpg*.*$/,
            loader: 'file'
        }]
    }
}