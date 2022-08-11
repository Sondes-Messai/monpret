import React, { Component } from "react";
import { Container, Row, Col, Ratio } from "react-bootstrap";

export default class HomeAboutUs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Row className="section   p-2">
          <div className="section-title text-center">
            <h2>
              À propos de <span>nous</span>
            </h2>
            <div></div>
          </div>
          <Col md={6} sm={9} xs={9}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum ante vel aliquet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras interdum ante vel aliquet. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras interdum ante vel
            aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras interdum ante vel aliquet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras interdum ante vel aliquet.
          </Col>
        </Row>
      </Container>
    );
  }
}
