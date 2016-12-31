//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
//const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'main': './site/jsx/app.jsx'
  },
  output: {
    path: './site/dist/js',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?stage=0'
      }
    ]
  },
  externals: {
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', '/'),
    /*new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['index'] }
        })*/
    //new ExtractTextPlugin("styles.css")
  ]
}