import React, { Component } from 'react'

class Try extends Component {
  render() {
    const { fruit, idx } = this.props
    return (
      <li key={fruit[0] + fruit[1]}>
        <div>{fruit[0]}</div>
        <div>{fruit[1]}</div>
        <div>{idx}</div>
        <div>컨텐츠1</div>
        <div>컨텐츠2</div>
        <hr></hr>
      </li>
    )
  }
}

export default Try
