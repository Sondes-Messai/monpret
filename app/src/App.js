import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LoginPage from "./pages/auth/login.page";
import SignUpPage from "./pages/auth/signup.page";
import SimulationPage from "./pages/simulation/simulation.page";
import SimulationsPage from "./pages/simulations/simulations.page";

function App() {
  return (
    <Router>
      <Navbar bg="white" expand="lg" className="p-4 border-bottom">
        <Container>
          <Navbar.Brand href="#home">
            <strong>Mon prêt</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="Simulation">Crédit immobilier</Nav.Link>
              <Nav.Link href="Simulation">Crédit consommation</Nav.Link>
              <Nav.Link href="simulations">Mes projets</Nav.Link>
              <Nav.Link href="sign-in">Se conneter</Nav.Link>
              <Nav.Link href="sign-up">Sign up</Nav.Link>
              <Nav.Link href="sign-up" className="border-start">
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
                <span></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main role="main" className="flex-shrink-0 container pb-3">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/simulation" element={<SimulationPage />} />
            <Route path="/simulations" element={<SimulationsPage />} />
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </div>
      </main>
      <footer className="bg-white py-3 border-top mt-auto">
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
