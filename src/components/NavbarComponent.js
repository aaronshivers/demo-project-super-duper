import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import logo from '../assets/logo.png'

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Demo Project"
          src={ logo }
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Case Studies</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Case Studies</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Shop</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Contact Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.7">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavbarComponent
