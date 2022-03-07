const path = require('path')

module.exports = {
  name: 'gugudan-setting',
  mode: 'development',
  devtool: 'eval', //개발끝나면 hidden-source-map로 바꾸기
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}
