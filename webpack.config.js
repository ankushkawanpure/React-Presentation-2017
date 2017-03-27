/**
 * Created by Ankush on 3/25/17.
 */
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'client/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_nodule)|(bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};