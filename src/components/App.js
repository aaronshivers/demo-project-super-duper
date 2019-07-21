import React from 'react'
import NavbarComponent from './NavbarComponent'
import JumbotronComponent from './JumbotronComponent'
import { Container } from 'react-bootstrap'

const App = () => (
  <div>
    <NavbarComponent />
    <JumbotronComponent />
    <Container>
      <h1>demo-project-super-duper</h1>
    </Container>
  </div>
)

export default App
