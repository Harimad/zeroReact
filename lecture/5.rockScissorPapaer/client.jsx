//Before
// import React from 'react'
// import ReactDOM from 'react-dom'

// import RSP from './RSP.jsx'

// ReactDOM.render(<RSP />, document.querySelector('#root'))

//After
import React from 'react'
import { createRoot } from 'react-dom/client'
import RSP from './RSPClass.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<RSP />)
