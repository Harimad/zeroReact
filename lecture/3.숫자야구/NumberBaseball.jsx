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
						[
							['배열Apple', 'Good'],
							['배열Banana', 'Bad'],
							['배열Tangerine', 'sour'],
							['배열Grape', 'bitter']
						].map((item, i) => {
							return <li key={item[0]+item[1]}>{item[0]} - {item[1]} -{i}</li>
						})
					}
					{
						[
							{fruit: '객체Apple', taste: 'Good'},
							{fruit: '객체Banana', taste: 'Bad'},
							{fruit: '객체Tangerine', taste: 'sour'},
							{fruit: '객체Grape', taste: 'bitter'},
						].map((item, i) => {
							return <li key={item.fruit+item.taste}>{item.fruit}-{item.taste}-{i}</li>
						})
					}

					<li><b>일반Apple</b> - Good</li>
					<li><b>일반Banana</b> - Bad</li>
					<li><b>일반Tangerine</b> - sour</li>
					<li><b>일반Grape</b> - bitter</li>
				</ul>
			</>
		)
	}
}

export default NumberBaseball
