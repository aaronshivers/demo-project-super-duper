import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket,
  faWallet,
  faImages,
  faChartBar,
  faEnvelope,
  faChartPie
} from '@fortawesome/free-solid-svg-icons'
import team from '../assets/team.jpg'

const BestFeatures = () => (
  <div>
    <Container>
      <Row>
        <Col md={ 12 } className="mb-3" >
          <div className="text-center">
            <span>WE ARE THE BEST AND WE PROVIDE</span>
            <h3>BEST FEATURES</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faRocket } />
            </div>
            <div>
              <h5 className="mb-1">SEO OPTIMIZATION</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faWallet } />
            </div>
            <div>
              <h5 className="mb-1">PAY PER CLICK</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faImages } />
            </div>
            <div>
              <h5 className="mb-1">APP DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faChartBar } />
            </div>
            <div>
              <h5 className="mb-1">SOCIAL MEDIA</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faEnvelope } />
            </div>
            <div>
              <h5 className="mb-1">EMAIL MARKETING</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={ 4 } sm={ 6 }>
          <div className="mt-5 mb-8 text-md-right">
            <div className="text-dark">
              <FontAwesomeIcon icon={ faChartPie } />
            </div>
            <div>
              <h5 className="mb-1">DATA ANALYSIS</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col md={ 12 } className="text-center mt-5">
          <a href="#">Learn More</a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default BestFeatures
