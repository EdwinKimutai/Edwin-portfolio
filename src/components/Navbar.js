import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import NavDropdown from "react-bootstrap/NavDropdown";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="sticky">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h1
            style={{
              color: "#9279BA",
              fontSize: "30px",
              fontFamily: "Sans-serif",
              fontWeight: "bold",
            }}
          >
            E.K.R.s
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <NavDropdown
            title={<span style={{ color: "black" }}>Verification</span>}
            id="basic-nav-dropdown"
            className="white-dropdown"
          >
            <NavDropdown.Item href="/resume">
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </NavDropdown.Item>
            <NavDropdown.Item href="/education">
              <ImBlog style={{ marginBottom: "2px" }} /> Education
            </NavDropdown.Item>
            <NavDropdown.Item href="/Certificate">
              <CgFileDocument style={{ marginBottom: "2px" }} /> Certificate
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
