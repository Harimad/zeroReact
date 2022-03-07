const path = require('path')
const webpack = require('webpack')

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
          presets: [
            [
              '@babel/preset-env', //자동으로 옛날 브라우저 지원해주는 기능
              {
                targets: {
                  // browsers: ['> 5% in KR', 'last 2 chrome versions'], //크롬 버전 최근 2개 까지 지원
                  browsers: ['> 1% in KR'],
                },
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
  // 확장프로그램
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}
