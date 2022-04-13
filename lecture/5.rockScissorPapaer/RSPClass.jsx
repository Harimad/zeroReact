import React, { Component } from 'react'

//클래스의 경우 - 컴포넌트 Life Cycle
//1. constructor
//2. 처음 render() 실행
//3. render속 ref 설정
//4. compoenentDidMount() 한번 실행
//5. setState/props 바뀔때 -> shouldComponentUpdate(true) -> render() -> componentDidUpdate()
//6. 부모가 나를 없앴을 때 -> componentWillUnmount() -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

const computerChoice = imgCoord => {
  // 콘솔 확인
  // console.log(Object.entries(rspCoords))
  // Object.entries(rspCoords).find(v => console.log(v))
  // Object.entries(rspCoords).find(v => console.log(v[1]))
  // console.log(Object.entries(rspCoords).find(v => v[1] === imgCoord))
  // console.log(Object.entries(rspCoords).find(v => v[1] === imgCoord)[0])
  return Object.entries(rspCoords).find(v => v[1] === imgCoord)[0]
}

class RSP extends Component {
  // 1
  state = {
    result: '',
    imgCoord: rspCoords.바위,
    score: 0,
  }

  interval

  // 3. 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 해요
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 1000)
  }

  // shouldComponentUpdate() {} // 5. return true 일 경우

  // componentDidUpdate() {} // 6. 리랜더링 후

  // 7. 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  changeHand = () => {
    const { imgCoord } = this.state
    if (imgCoord === rspCoords.바위) {
      this.setState({ imgCoord: rspCoords.가위 })
    } else if (imgCoord === rspCoords.가위) {
      this.setState({ imgCoord: rspCoords.보 })
    } else if (imgCoord === rspCoords.보) {
      this.setState({ imgCoord: rspCoords.바위 })
    }
  }

  onClickBtn = choice => () => {
    const { imgCoord } = this.state
    clearInterval(this.interval)
    const myScore = scores[choice]
    const cpuScore = scores[computerChoice(imgCoord)]
    const diff = myScore - cpuScore
    if (diff === 0) {
      this.setState({
        result: '비겼습니다',
      })
    } else if ([-1, 2].includes(diff)) {
      this.setState(prevState => {
        return {
          result: '이겼습니다',
          score: prevState.score + 1,
        }
      })
    } else {
      this.setState(prevState => {
        return {
          result: '졌습니다',
          score: prevState.score - 1,
        }
      })
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 1000)
    }, 2000)
  }

  // 2, 4(setState/props바뀔때)
  render() {
    const { result, imgCoord, score } = this.state
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn('가위')}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}

export default RSP
