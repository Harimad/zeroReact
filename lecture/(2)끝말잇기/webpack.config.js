const path = require('path')

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
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },

  output: {
    // 출력
    path: path.join(__dirname, 'dist'), //C:\\users\leesh\webstorm\react-webgame\lecture\dist
    filename: 'app.js',
  },
}
