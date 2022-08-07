import axios from "axios";

import React, { Component, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AuthService from "../../services/auth.service";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  state = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
  };

  handleChange = (input) => (e) => {
    const { value } = e.target;
    this.state[input] = value;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      password: this.state.password,
    };
    AuthService.signup(user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Register</h3>

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
      </div>
    );
  }
}
