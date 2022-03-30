import React, { PureComponent, memo } from 'react'
// 자식 컴포넌트에서 PureComponent를 쓰면
// props로 받아온 값의 변경유무를 체크해서 리랜더링을 해줌 -> 리랜더링 낭비 막아줌
// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     )
//   }
// }

const Try = memo(({ tryInfo }) => {
  return (
    <>
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    </>
  )
})

export default Try
