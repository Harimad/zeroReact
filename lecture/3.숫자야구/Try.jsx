import React, { PureComponent, memo, useState } from 'react'

class Try extends PureComponent {
  //constructor 쓰면 미세한 다른 동작 가능
  constructor(props) {
    super(props)
    const { tryInfo } = this.props
    this.state = {
      result: tryInfo.result,
      try: tryInfo.try,
    }
  }

  render() {
    const { tryInfo } = this.props
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    )
  }
}

// const Try = memo(({ tryInfo }) => {
//   //이렇게 자식이 부모의 state를 직접 바꾸면 안된다.
//   // tryInfo.try = 'hello'

//   // 직접 바꿀때는 state에 값을 넣어준다. -> 좋은 방법은 아님
//   // 자식이 부모 state를 바꾸면 부모 state에서 관리가 어려울 수 있다.
//   const [result, setResult] = useState(tryInfo.result)

//   const onClick = () => {
//     setResult('1')
//   }
//   return (
//     <>
//       <li>
//         <div>{tryInfo.try}</div>
//         <div onClick={onClick}>{tryInfo.result}</div>
//       </li>
//     </>
//   )
// })

export default Try
