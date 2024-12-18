import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/navbar.css";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        Uzbekistan Expert
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="nav-link">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" className="nav-link">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/university" className="nav-link">
            University
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
