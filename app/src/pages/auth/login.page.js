import React, { Component } from "react";
import AuthService from "../../services/auth.service";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    email: "",
    password: "",
  };

  handleChange = (input) => (e) => {
    const { value } = e.target;
    this.state[input] = value;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    AuthService.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Log in</h3>

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

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
