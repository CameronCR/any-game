import path from 'path';

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/ , loader: 'babel-loader'}
    ]
  }
};
