var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    'jquery': {
      root: 'jQuery',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    }
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.json$/, loader: 'json'},
      {test:/\.css$/, loader: 'style-loader!css-loader'},
    ]
  },
}