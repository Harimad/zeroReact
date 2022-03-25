import React, { Component } from 'react'

function getNumbers() { //숫자 4개 중복없이 랜덤으로 뽑는 함수

}

class NumberBaseball extends Component {
	state = {
		result: '',
		value: '',
		answer: getNumbers(),
		tries: [],
	}
	onSubmitForm = () => {

	}
	onChangeInput = () => {

	}

	render() {
		return(
			<>
				<h1>{this.state.result}</h1>
				<form onSubmit={this.onSUbmitForm}>
					<input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
				</form>
				<div>시도: {this.state.tries.length}</div>
				<ul>
					{
						['1', '2', '3', '4', '5'].map((item) => {
							return <li>{item}</li>
						})
					}
				</ul>
			</>
		)
	}
}

export default NumberBaseball
