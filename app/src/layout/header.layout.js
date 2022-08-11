import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "../services/auth.service";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logoutUser();
    navigate("/");
  };

  let user = AuthService.getUser();
  let loggedIn = user ? true : false;

  return (
    <Navbar bg="white" expand="lg" className="p-4 border-bottom">
      <Container>
        <Navbar.Brand href="">
          <strong>Mon prêt</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {(() => {
            if (user ? true : false) {
              return (
                <Nav className="ms-auto">
                  <Nav.Link href="home">Accueil</Nav.Link>
                  <Nav.Link href="Simulation">
                    Simulateur crédit immobilier
                  </Nav.Link>
                  <Nav.Link href="faq">Questions</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                  <Nav.Link href="simulations">Mes projets</Nav.Link>
                  <NavDropdown
                    eventKey={3}
                    title={<FontAwesomeIcon icon={["user", "code"]} />}
                    id="basic-nav-dropdown"
                  >
                    <Navbar.Text>{user ? user.user.username : ""}</Navbar.Text>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <NavDropdown.Item onClick={handleLogout}>
                      Log Out <FontAwesomeIcon icon={["fas", "code"]} />
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            }
            return (
              <Nav className="ms-auto">
                <Nav.Link href="home">Accueil</Nav.Link>
                <Nav.Link href="Simulation">
                  Simulateur crédit immobilier
                </Nav.Link>
                <Nav.Link href="faq">Questions</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="sign-in">Se conneter</Nav.Link>
                <Nav.Link href="sign-up">Sign up</Nav.Link>
              </Nav>
            );
          })()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
