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

import HomePage from "../pages/home/home.page";
import LoginPage from "../pages/auth/login.page";
import SignUpPage from "../pages/auth/signup.page";
import ContactPage from "../pages/autre/contact.page";
import FaqPage from "../pages/autre/faq.page";
import SimulationPage from "../pages/simulation/simulation.page";
import SimulationsPage from "../pages/simulations/simulations.page";

function Body() {
  return (
    <main>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/simulations" element={<SimulationsPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
      </Routes>
    </main>
  );
}

export default Body;
