const React = require('react')
const { Component } = React

class WordRelay extends Component {
  state = {
    word:'하리매드',
    value: '',
    result: '',
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length-1] === this.state.value[0]) {
      this.setState({
        reslt: 'Correct',
        word: this.state.value,
        value: '',
      })
      this.input.focus();
    } else {
      this.setState({
        result: 'Wrong',
        value: '',
      });
      this.input.focus();
    }
  }

  onChangeInput = (e) => {
    this.setState({value: e.target.value})
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
          <button>Click!</button>
          <div>{this.state.result}</div>
        </form>
      </>
    )
  }
}

module.exports = WordRelay
