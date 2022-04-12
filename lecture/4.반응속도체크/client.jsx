import React from 'react'
// Before
// import ReactDOM from 'react-dom'
// ReactDOM.render(<ResponseCheck />, document.querySelector('#root'))

import ResponseCheck from './ResponseCheck.jsx'

//After
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ResponseCheck />)
