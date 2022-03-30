import React, { Component } from 'react'

class Test extends Component {
  state = {
    counter: 0,
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //어떨때 랜더링이 다시 되는지 설정해줘야함
    if (this.state.counter !== nextState.counter) {
      return true //지금 counter와 미래의 counter가 다른게 true면 랜더링 해줘~ -> 더 이상 클릭 해도 랜더링 일어나지 않음.
    }
    return false
  }

  onClick = () => {
    // setState만 호출되어도 render부분이 재호출됨.
    this.setState({})
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
