import axios from "axios";

import React, { Component, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
export default class SignUpPage extends React.Component {
  state = {
    nom: null,
      prenom: null,
      email: null,
      password: null,
      user: null,
      error: null,
  }
  handleChange = (input) => (e) => {
    const { value } = e.target;
    this.state[input] = value;
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    try {
      const user = {
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email,
        password: this.state.password,
      };
      AuthService.signup(user).then((responses) => {
        AuthService.login(this.state.email, this.state.password).then(
          (response) => {
            AuthService.saveUser(response.data);
            const user = AuthService.getUser();
            this.setState({ user });
            console.log(user);
          }
        );
      });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  }

  render() {
    let { user, error } = this.state;
    return (
      <Container>
        <Row className="my-3 p-3 bg-white rounded box-shadow">
          {error && <p>{error.message}</p>}
          {user && <Navigate to="/simulations" replace={true} />}

          <div className="section-title text-center">
            <h2>
              Register <span>In</span>
            </h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={this.handleChange("prenom")}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={this.handleChange("nom")}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleChange("email")}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.handleChange("password")}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">log in?</a>
            </p>
          </form>
        </Row>
      </Container>
    );
  }
}
