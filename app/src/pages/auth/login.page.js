import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button , Form, FormGroup, FormControl} from 'react-bootstrap';
import AuthService from "../../services/auth.service";
export default class LoginPage extends Component {
  state = { email: null, password: null, user: null, error: null };

  handleChange = (input) => (e) => {
    const { value } = e.target;
    this.state[input] = value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      AuthService.login(this.state.email, this.state.password).then(
        (response) => {
          AuthService.saveUser(response.data);
          const user = AuthService.getUser();
          this.setState({ user });
        }
      );
    } catch (error) {
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
            Log in <span>In</span>
            </h2>
          </div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
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
        </Row>
      </Container>
    );
  }
}
