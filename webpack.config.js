// import jsonImporter from 'node-sass-json-importer';

module.exports = {
  entry: ['./site/jsx/app.jsx'],
  output: {
    path: './site/dist/js',
    filename: 'bundle.js'
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
  }
}