const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')

module.exports = {
    entry: { index: path.resolve(__dirname, 'src', 'index.js') },

    output: { path: path.resolve(__dirname, 'build'), filename: 'main.js' },
    // devServer: {
    //     host:'localhost'
    // },
    // devServer: {
    //     devMiddleware: { publicPath: "/build/" },
    //     static: { directory: path.resolve(__dirname) },
    // },    
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new CopyPlugin({
            patterns : [
                { from : 'data', to : 'data' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}
