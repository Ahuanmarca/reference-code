// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>ByteBazaar 🕹️</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Games</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
