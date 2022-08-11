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

import {Container, Grid,  Row, Col, Navbar, Nav,NavDropdown, NavItem,MenuItem, Button, Glyphicon } from 'react-bootstrap';


import Header from "./layout/header.layout";
import Body from "./layout/body.layout";
import Footer from "./layout/footer.layout";


import AuthService from "./services/auth.service";


import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
