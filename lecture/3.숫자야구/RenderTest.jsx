import React, { PureComponent } from 'react'

//PureComponent가 shouldComponentUpdate를 알아서 구현한 방법이다
// shouldComponentUpdate(nextProps, nextState, nextContext) {}

// state 변경 유무로 판단한다.
// 객체나 배열같은 참조 관계가 있는 자료형은 바뀐 유무 판단 어려워함
class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    array: [],
    object: {},
  }

  onClick = () => {
    const array = this.state.array
    array.push(1)
    this.setState({
      array: array,
    })
    // this.setState({
    //   array: [this.state.array, 1],
    // })
  }
  render() {
    console.log('렌더링', this.state)
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test
