import React, { memo, useState } from 'react'
import Try from './Try'

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const array = []
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
  console.log(array)
  return array
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')
  const [answer, setAnswer] = useState(getNumbers())
  const [tries, setTries] = useState([])

  const reset = () => {
    alert('Game Restart')
    setValue('')
    setAnswer(getNumbers())
    setTries([])
  }

  const onSubmitForm = e => {
    e.preventDefault()
    // 4개 다 맞췄을때
    if (value === answer.join('')) {
      setResult('홈런')
      setTries(prevState => [...prevState, { try: value, result: '홈런!' }])
      reset()
    } else {
      const answerArray = value.split('').map(v => parseInt(v))
      let strike = 0
      let ball = 0
      //10번 틀렸을 때
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)
        reset()
      } else {
        //10번 이하로 틀렸을때
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1
          } else if (answer.includes(answerArray[i])) {
            ball += 1
          }
        }
        setTries(prevState => [
          ...prevState,
          {
            try: value,
            result: `${strike}스트라이크 ${ball} 볼 입니다`,
          },
        ])
        setValue('')
      }
    }
  }
  const onChangeInput = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도`} tryInfo={v} />
        })}
      </ul>
    </>
  )
})

export default NumberBaseball
