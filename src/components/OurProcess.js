import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import team from '../assets/team.jpg'

const OurProcess = () => (
  <div>
    <Container>
      <Row>
        <Col className="mb-3" >
          <div className="text-center">
            <span>STEPS FOR YOUR SUCCESS</span>
            <h3>OUR PROCESS</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={ 3 } sm={ 6 }>
          <div>
            <h2 className="mb-1">01</h2>
            <h6 className="mb-2">SKETCH & DESIGN</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
            </p>
            <a className="mt-2" href="#">
              READ MORE >
            </a>
          </div>
        </Col>
        <Col lg={ 3 } sm={ 6 }>
          <div>
            <h2 className="mb-1">02</h2>
            <h6 className="mb-2">CREATIVE PROCESS</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
            </p>
            <a className="mt-2" href="#">
              READ MORE >
            </a>
          </div>
        </Col>
        <Col lg={ 3 } sm={ 6 }>
          <div>
            <h2 className="mb-1">03</h2>
            <h6 className="mb-2">DEVELOPMENT</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
            </p>
            <a className="mt-2" href="#">
              READ MORE >
            </a>
          </div>
        </Col>
        <Col lg={ 3 } sm={ 6 }>
          <div>
            <h2 className="mb-1">04</h2>
            <h6 className="mb-2">FINAL PRODUCT</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
            </p>
            <a className="mt-2" href="#">
              READ MORE >
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <div>
      <Image
        src={ team }
        fluid
        className="mt-3"
      />
    </div>
  </div>
)

export default OurProcess
