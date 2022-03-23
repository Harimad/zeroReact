const { useState, useRef } = require('react')
const React = require('react')

const WordRelay = () => {
	const [word, setWord] = useState('자바스크립트')
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')
	const inputRef = useRef(null)

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (word[word.length-1] === value[0]) {
			setResult('Correct');
			setWord(value)
			setValue('')
		} else {
			setResult('Wrong')
			setValue('')
		}
		inputRef.current.focus()
	}
	const onChangeInput = (e) => {
		setValue(e.target.value);
	}
	return (
		<>
			<div>{word}</div>
			<form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자입력</label>
				<input id='wordInput' className='wordInput' ref={inputRef} value={value} onChange={onChangeInput}/>
				<button>Click!</button>
				<div>{result}</div>
			</form>
		</>
	)
}

module.exports = WordRelay
