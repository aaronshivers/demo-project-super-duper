import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import App from './components/App'
import LoadingPage from './components/LoadingPage'


let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    render(<App />, document.getElementById('app'))
    hasRendered = true
  }
}

render(<LoadingPage />, document.getElementById('app'))

setTimeout(() => renderApp(), 1000)
