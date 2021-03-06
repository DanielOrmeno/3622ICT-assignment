var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: './src/app.es6.js',
    output: {
        path: __dirname + "/js",
        filename: 'bundle.js'
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
              test: path.join(__dirname, 'src'),
              loader: 'babel-loader'
            },
            {
              test: /\.html$/,
              loader: "html-loader"
            },
            {
              test: /\.css$/,
              loader: "style!css"
            }
        ]
    }
};
