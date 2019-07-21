import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import bg from '../assets/bg.jpg'

const JumbotronComponent = () => (
  <Jumbotron fluid className="jumbotron">
    <Container>
      <h1>Fluid jumbotron</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space of
        its parent.
      </p>
    </Container>
  </Jumbotron>
)

export default JumbotronComponent
