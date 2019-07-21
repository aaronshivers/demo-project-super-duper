import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import IndexPage from '../components/IndexPage'
import ServicesPage from '../components/ServicesPage'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Switch>
        <Route path="/" component={ IndexPage } exact={ true } />
        <Route path="/services" component={ ServicesPage } />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
