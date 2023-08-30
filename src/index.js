import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.querySelector('#root')
createRoot(root).render(<App />)