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
    app: ['./WordRelay.jsx'],
  },
  output: {
    // 출력
    path: path.join(__dirname, 'dist'), //C:\\users\leesh\webstorm\react-webgame\lecture\dist
    filename: 'app.js',
  },
}
