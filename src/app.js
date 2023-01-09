import React from 'react'
import { createRoot } from 'react-dom/client'
import HexGuessPage from './components/HexGuessPage'
import './styles/styles.scss'

const root = createRoot(document.getElementById('root'))
root.render(<HexGuessPage />)