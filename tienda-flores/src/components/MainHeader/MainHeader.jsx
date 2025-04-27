import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'

function MainHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">🌸 Floristería</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/rosas">Rosas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/tulipanes">Tulipanes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/margaritas">Margaritas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/orquideas">Orquídeas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">🛒 Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;