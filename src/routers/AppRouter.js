import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import Home from '../components/Home'
import IndexPage from '../components/IndexPage'
import ServicesPage from '../components/ServicesPage'
import NotFoundPage from '../components/NotFoundPage'

// export const history = createBrowserHistory()

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ IndexPage } />
        <Route path="/home" component={ Home } />
        <Route path="/services" component={ ServicesPage } />
        {/*<Route component={ NotFoundPage } />*/}
      </Switch>
    </div>
  </Router>
)

export default AppRouter
