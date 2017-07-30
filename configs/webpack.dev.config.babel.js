// @flow

import path from 'path';
import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: [
        'react-hot-loader/patch',
        './client/src/index'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:8080/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
                // use: ['style-loader', 'css-loader', 'postcss-loader']
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        port: 8080,
        hot: true
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new ExtractTextPlugin('styles.css'),
    ],

    context: path.resolve(__dirname, '..')
}
