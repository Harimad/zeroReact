const path = require('path')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', //실서비스: production
  devtool: 'eval', //빠르게 하겠다
  resolve: {
    //파일확장자를 저장 후 찾아줌
    extensions: ['.js', '.jsx'],
  },

  // entry랑 output이 가장 중요
  entry: {
    // 입력
    app: ['./client.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, //js나 jsx파일은 아래 옛날 브라우저에도 돌아가게 하겠다
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
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    // 출력
    path: path.join(__dirname, 'dist'), //__dirname은 현재 폴더임, C:\\users\leesh\webstorm\react-webgame\lecture\dist
    filename: 'app.js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' }, //나중에 웹팩명령어 실행시 저장데이터를 생성해주는 경로
    static: { directory: path.resolve(__dirname) }, //현재 index.html이 존재하는 폴더위치, 다른 위치에 있다면 (__dirname, '경로')하면됨
    hot: true,
  },
}
