import React from 'react'
import { createRoot } from 'react-dom/client'
import LottoClass from './LottoClass.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<LottoClass />)
