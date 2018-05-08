const path = require('path');

module.exports = {
 entry: './src/index.js',
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'main.js'
 },
 module: {
   rules: [{
     loader: 'babel-loader',
     test: /\.js$/,
     exclude: /node_modules/
   }, {
     test: /\.s?css$/,
     use: [
       'style-loader',
       'css-loader',
       
     ]
   }]
 },
 devtool: 'cheap-module-eval-source-map',
 devServer: {
   contentBase: path.join(__dirname, 'dist'),
   historyApiFallback: true
 }
};