import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
} from "react-bootstrap";

export default class HomeNewsletter extends Component {
  constructor() {
    super();
    this.state = {emailNews :""}
  }

  render() {
    return (
      <Container >
        <Row className="section-newsletter p-2">
                <Col
                  md={7}
                  sm={12}
                  xs={12}
                  className="text-center"
                >
                  <div className="signup_form">
                    <h3>Vous souhaitez rester informé</h3>
                    <form
                      method="post"
                      name="mc-news-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <FormGroup
                        controlId="formHorizontalNewsEmail"
                      >
                        <Col sm={12} md={8}>
                          <FormControl
                            type="email"
                            placeholder="email"
                            onChange={(e) => {
                              this.setState({ emailNews: e.target.value });
                            }}
                            value={this.state.emailNews}
                          />
                        </Col>
                      </FormGroup>
                      <span>
                        <Button>Subscribe</Button>
                      </span>
                    </form>
                  </div>
                </Col>
              </Row>
      </Container>
    );
  }
}
