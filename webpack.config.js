var commonLoaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['react-hot', 'babel-loader']
}];

module.exports = [{
  name: 'browser',
  entry: './src/entry',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: commonLoaders.concat({
      test: /\.css$/,
      loaders: ['style', 'css']
    })
  },
  devServer: {
    contentBase: "./dist"
  }
}, {
  name: 'server',
  entry: ['./src/app'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.components.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: commonLoaders.concat({
      test: /\.css$/,
      loaders: ['ignore']
    })
  },
  devServer: {
    contentBase: "./dist"
  }
}];
