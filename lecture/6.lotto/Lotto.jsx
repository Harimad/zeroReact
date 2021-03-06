import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import Ball from './Ball'

function getWinNumbers() {
  console.log('getWinNumbers함수')
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1)
  const shuffle = []
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    )
  }
  const bonusNumber = shuffle[shuffle.length - 1]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
  return [...winNumbers, bonusNumber]
}

const Lotto = () => {
  // const [winNumbers, setWinNumbers] = useState(getWinNumbers()) //getWinNumbers() 7번 호출
  const lottoNumbers = useMemo(() => getWinNumbers(), []) // useMemo로 getWinNumbers() 리턴값 캐싱
  const [winNumbers, setWinNumbers] = useState(lottoNumbers) // 캐싱한 값을 state초기값으로 넣음

  const [winBalls, setWinBalls] = useState([])
  const [bonus, setBonus] = useState(null)
  const [redo, setRedo] = useState(false)
  const timeouts = useRef([])

  useEffect(() => {
    console.log('useEffect1')
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prevState => [...prevState, winNumbers[i]])
      }, (i + 1) * 300)
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6])
      setRedo(true)
    }, 2100)
    return () => {
      timeouts.current.forEach(v => {
        clearTimeout(v)
      })
    }
  }, [timeouts.current]) // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  useEffect(() => {
    console.log('useEffect2 - 로또 숫자를 생성합니다.')
  }, [winNumbers])

  const onClickRedo = useCallback(() => {
    console.log('onClickRedo')
    console.log(winNumbers)
    setWinNumbers(getWinNumbers())
    setWinBalls([])
    setBonus(null)
    setRedo(false)
    timeouts.current = []
  }, [winNumbers])

  return (
    <>
      <div>Win Numbers</div>
      <div id="결과창">
        {winBalls.map(v => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>Bonus!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>One more</button>}
    </>
  )
}

export default Lotto
