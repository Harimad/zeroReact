import React, { useState, useRef } from 'react'

const ResponseCheck = () => {
  const [state, setState] = useState('waiting')
  const [message, setMessage] = useState('클릭해서 시작하세요')
  const [result, setResult] = useState([])
  const timeout = useRef(null)
  const startTime = useRef(0)
  const endTime = useRef(0)

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now')
        setMessage('지금 클릭')
        startTime.current = new Date()
      }, Math.random() * 1000 + 2000)
      setState('ready')
      setMessage('초록색이 되면 클릭하세요')
    } else if (state === 'ready') {
      clearTimeout(timeout)
      setState('waiting')
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.')
    } else if (state === 'now') {
      endTime.current = new Date()
      setState('waiting')
      setMessage('클릭해서 시작하세요')
      setResult(prevState => [
        ...prevState,
        endTime.current - startTime.current,
      ])
    }
  }

  const onReset = () => {
    setResult([])
  }

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>{result.reduce((a, b) => a + b / result.length)}</div>
        <button onClick={onReset}>Reset</button>
      </>
    )
  }

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
}

export default ResponseCheck
