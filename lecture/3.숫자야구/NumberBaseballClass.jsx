import React, { Component, createRef } from 'react'
import Tryclass from './TryClass'

function getNumbers() {
  //숫자 4개 중복없이 랜덤으로 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const array = []
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
  console.log(array)
  return array
}

class NumberBaseballClass extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), //ex) [1, 3, 5, 7]
    tries: [], // push 쓰면 안된다!!
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {}
  // A -> B -> C -> D -> E
  // A -> C 로 props 넘길때는 A -> B-> ... -> E 로 넘겨줘야함( B,C,D가 의도치 않은 랜더링 발생)
  // A -> E 로 바로 넘기고 싶을때 nextContext 사용함
  // 이걸 응용한 것이 redux임

  reset = () => {
    alert('게임을 다시 시작합니다!')
    this.setState({
      value: '',
      answer: getNumbers(),
      tries: [],
    })
  }

  onSubmitForm = e => {
    e.preventDefault()
    const { value, answer, tries } = this.state
    // 4개 다 맞췄을때
    if (value === answer.join('')) {
      this.setState(prevState => {
        return {
          result: '홈런',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      })
      this.reset()
      // this.inputRef.focus()
      this.inputRef.current.focus()
    } else {
      const answerArray = value.split('').map(v => parseInt(v))
      let strike = 0
      let ball = 0
      //10번 틀렸을 때
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        })
        this.reset()
        // this.inputRef.focus()
        this.inputRef.current.focus()
      } else {
        //10번 이하로 틀렸을때
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1
          } else if (answer.includes(answerArray[i])) {
            ball += 1
          }
        }
        this.setState(prevState => {
          return {
            tries: [
              ...prevState.tries,
              {
                try: value,
                result: `${strike}스트라이크 ${ball} 볼 입니다`,
              },
            ],
            value: '',
          }
        })
      }
    }
  }
  onChangeInput = e => {
    this.setState({
      value: e.target.value,
    })
  }

  inputRef = createRef()

  // onInputRef = e => {
  //   this.inputRef = e
  // }

  render() {
    const { result, value, tries } = this.state
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            // ref={this.onInputRef}
            maxLength={4}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Tryclass key={`${i + 1}차 시도`} tryInfo={v} />
          })}
        </ul>
      </>
    )
  }
}

export default NumberBaseballClass
