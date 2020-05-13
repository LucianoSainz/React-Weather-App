const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {

    entry: [
        `./src/app/index.js`
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    devMode ?'style-loader' : MiniCssExtratPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtratPlugin({
            filename: 'bundle.css'
        })
    ]
};