import React, { Component } from 'react'

class Tryclass extends Component {
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

export default Tryclass
