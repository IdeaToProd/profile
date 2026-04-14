/**
 * main.jsx — 애플리케이션 엔트리.
 *   전역 CSS(global.css)는 여기서 단 한번 import.
 *   React 18의 createRoot 사용.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
