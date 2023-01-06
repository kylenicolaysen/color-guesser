import React from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './components/MainPage'
import './styles/styles.scss'

const root = createRoot(document.getElementById('root'))
root.render(<MainPage />)