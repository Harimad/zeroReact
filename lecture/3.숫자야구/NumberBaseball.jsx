import React, { Component } from 'react'
import Try from './Try'

function getNumbers() {
  //숫자 4개 중복없이 랜덤으로 뽑는 함수
}

class NumberBaseball extends Component {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
  }
  state = {
    result: '',
    value: '?',
    answer: getNumbers(),
    tries: [],
  }
  onSubmitForm = e => {
    e.preventDefault()
    console.log(this)
  }
  onChangeInput(e) {
    console.log(this)
    console.log(this.state.value)
  }

  fruits = [
    ['배열Apple', 'Good'],
    ['배열Banana', 'Bad'],
    ['배열Tangerine', 'sour'],
    ['배열Grape', 'bitter'],
  ]

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSUbmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((fruit, i) => (
            <Try key={fruit[0] + fruit[1]} fruit={fruit} idx={i} />
          ))}
        </ul>
      </>
    )
  }
}

export default NumberBaseball
