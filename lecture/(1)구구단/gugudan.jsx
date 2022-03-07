const React = require('react')
const { Component } = React

class GuGuDan extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: ``,
  }

  onSubmit = e => {
    e.preventDefault()
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState(prevState => {
        return {
          result: `${prevState.value} 정답!`,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      })
      this.input.focus()
    } else {
      this.setState({
        result: `${this.state.value} 땡!\n`,
        value: '',
      })
      this.input.focus()
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  onRefInput = c => {
    this.input = c
  }

  render() {
    console.log('랜더링')
    return (
      <React.Fragment>
        <div>
          {this.state.first} 곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">입력!</button>
        </form>
        <div>{this.state.result}</div>
      </React.Fragment>
    )
  }
}

module.exports = GuGuDan
