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

import {Container,  Row, Col, Navbar, Nav,NavDropdown } from 'react-bootstrap';

function Footer() {
    return (
      <footer className="bg-white py-3 border-top fixed-bottom">
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
    );
  }

  

  export default Footer;