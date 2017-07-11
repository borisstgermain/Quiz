// @flow

import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'react-hot-loader/patch',
        './client/src/index'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'server/public'),
        publicPath: 'http://localhost:8080/'
    },

    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
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
    ],

    context: path.resolve(__dirname, '..')
}
