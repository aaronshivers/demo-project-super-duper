import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    render(<AppRouter />, document.getElementById('app'))
    hasRendered = true
  }
}

render(<LoadingPage />, document.getElementById('app'))

// if (history.location.pathname === '/') {
//   setTimeout(() => renderApp(), 1000)
//   history.push('/')
// } else {
//   setTimeout(() => renderApp(), 1000)
//   history.push('/')
// }

setTimeout(() => renderApp(), 1000)
history.push('/')