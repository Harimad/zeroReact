const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'gugudan-setting',
  mode: 'development',
  devtool: 'inline-source-map', //개발끝나면 hidden-source-map로 바꾸기
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: './client',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', //자동으로 옛날 브라우저 지원해주는 기능
              {
                targets: { browsers: ['> 1% in KR'] }, //browserlist
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [], // 확장프로그램

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}
