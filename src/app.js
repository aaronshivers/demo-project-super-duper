import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'

const jsx = (
    <AppRouter />
)

// let hasRendered = false
// const renderApp = () => {
//   if (!hasRendered) {
//     render(jsx, document.getElementById('app'))
//     hasRendered = true
//   }
// }

render(<AppRouter />, document.getElementById('app'))

// if (history.location.pathname === '/') {
//   setTimeout(() => renderApp(), 1000)
//   history.push('/')
// } else {
//   setTimeout(() => renderApp(), 1000)
//   history.push('/')
// }

// setTimeout(() => renderApp(), 1000)
// history.push('/')