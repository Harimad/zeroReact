const React = require('react')
const { Component } = React

class WordRelay extends Component {
  state = {
    text: 'Hello, 친구들 빡빡이 아조씨야',
  }

  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
      </>
    )
  }
}

module.exports = WordRelay
