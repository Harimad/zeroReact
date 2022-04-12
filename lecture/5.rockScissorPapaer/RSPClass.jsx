import React, { Component } from 'react'

//클래스의 경우 - 컴포넌트 Life Cycle
//1. constructor
//2. 처음 render() 실행
//3. render속 ref 설정
//4. compoenentDidMount() 한번 실행
//5. setState/props 바뀔때 -> shouldComponentUpdate(true) -> render() -> componentDidUpdate()
//6. 부모가 나를 없앴을 때 -> componentWillUnmount() -> 소멸

class RSP extends Component {
  // 1
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  }
  componentDidMount() {} // 3. 컴포넌트가 첫 랜더링된 후 한번만

  shouldComponentUpdate() {} // 5. return true 일 경우

  componentDidUpdate() {} // 6. 리랜더링 후

  componentWillUnmount() {} // 7. 컴포넌트가 제거되기 직전
  // 2, 4(setState/props바뀔때)
  render() {
    return (
      <>
        <div>hello</div>
      </>
    )
  }
}

export default RSP
