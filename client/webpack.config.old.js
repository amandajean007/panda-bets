// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: path.join(__dirname, 'client', '/src/index.js'),
//     output: {
//         path:path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     mode: 'production',
//     module: {
//         rules: [
//           {
//             test: /\.?js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: "babel-loader",
//                 options: {
//                     presets: ['@babel/preset-env', '@babel/preset-react']
//                 }
//             }
//           },
//         ]
//     },
//     target: 'web',
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, "client", "/public/index.html"),
//         }),
//     ],
// }