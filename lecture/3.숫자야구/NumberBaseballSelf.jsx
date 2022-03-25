// 야구게임
// 1. 컴퓨터의 정답설정
// [x] 정답 생성 버튼을 누르면 정답이 생성이 되도록 한다.
// [x] 정답 4자리의 랜덤 숫자를 만든다.
// [x] 4자리는 각각 다른 숫자이다.

// 2. 사용자 정답설정
// [x] input 태그를 만들고 여기에 사용자 입력 이벤트를 설정한다.
// [x] 사용자가 임의의 숫자 4자리를 입력한다.

// 3. 정답비교
// [x] 정답과 사용자의 입력값을 비교한다.
// [x] 두 값의 같은 자리수에 있는 값이 일치하면 strike를 1 올려준다.
// [x] 자리수는 일치 하지않지만 다른 자리수에 사용자의 입력값이 있다면 ball을 1 올려준다.
// [x] 정답과 사용자의 입력값이 4자리 모두 일치하면 4S를 쓰고 게임종료한다.

// 4. 입력했던 값과 결과 값을 화면에 달아주기
// []. strike와 ball을 담은 배열값을 가진 변수 선언
// []. 위에서 선언한 배열값으로 map 메서드를 이용한다.
// []. Try 컴포넌트 생성한다.
// []. Try 컴포넌트에 stike, ball 값을 props로 넘겨준다.
// []. NumberBaseball 컴포넌트에서 Try 컴포넌트를 사용한다.

// 조건
// 1. 사용되는 숫자는 0~9 까지의 서로 다른 숫자이다. 경우에 따라 0사용 안할 수 있음
// 2. 숫자는 맞지만 위치가 틀렸을 때는 볼
// 3. 숫자와 위치가 전부 맞으면 스트라이크
// 4. 숫자와 위치가 전부 틀리면 아웃.

// 예시
// 임의이 숫자가 076 이라고 가정함
// 1회차 - 485 -> 아웃
// 2회차 - 310 -> 0S 1B
// 3회차 - 206 -> 1S 1B
// 4회차 - 067 -> 1S 2B
// 5회차 - 076 -> 3S 0B
import React, { useState } from 'react'

const NumberBaseball = () => {
	const [strike, setStrike] = useState(0)
	const [ball, setBall] = useState(0)
	const [answer, setAnswer] = useState([])
	const [userNumber, setUserNumber] = useState('')
	const [restChance, setRestChance] = useState(10)
	const [result, setResult] = useState('시작전')

	const setRandomNumber = () => {
		setAnswer([])
		let arr = []
		while(arr.length < 4) {
			let random = parseInt(Math.random() * 10)
			if (arr.indexOf(random) === -1) arr.push(random)
		}
		setAnswer([...arr].join(''))
		setResult('게임중')
	}

	const onChange = (e) => {
		if(e.target.value.length > e.target.maxLength) {
			e.target.value = e.target.value.slice(0, e.target.maxLength)
		}
		setUserNumber(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(`answer: ${answer}, user: ${userNumber}`)
		setStrike(0)
		setBall(0)
		for (let i = 0; i < answer.length; i++) {
			if (answer[i] == userNumber[i]) setStrike(prev => prev + 1)
			else if (answer.indexOf(userNumber[i]) > -1) setBall(prev => prev+1)
		}
		if (answer === userNumber) {
			setResult('정답. 게임종료')
			return;
		}
		let arr = []
		arr = [strike, ball]
		setRestChance(prev => prev-1)
	}
	// Here is needed for Updating
	// const DrawTry = ({userNumber, strike, ball}) => {
	// 	return (
	// 		<p>record: {userNumber} : {strike}S {ball}B</p>
	// 	)
	// }

	return (
		<>
			<div>
				<h1>NumberBaseball</h1>
				<h1>{strike}S {ball}B</h1>
				<h1>남은 기회: {restChance}, {result}</h1>
				<button onClick={setRandomNumber}>정답 랜덤숫자생성</button>
				<form onSubmit={onSubmit}>
					<input type="number" maxLength='4' value={userNumber} onChange={onChange}/>
					<button>입력</button>
				</form>
				{/* 여기에 Try컴포넌트 생성 */}
				{/* <DrawTry  userNumber={userNumber} strike={strike} ball={ball} /> */}
			</div>
		</>
	)
}

export default NumberBaseball;
