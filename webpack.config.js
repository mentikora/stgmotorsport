const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
     filename: 'build.js'   
  },
  
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css'
        })
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('dist/style.css')
  ],

  watch: true
};