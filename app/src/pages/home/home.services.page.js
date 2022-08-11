import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button,
  Carousel,
} from "react-bootstrap";
import _ from "lodash";

import { CardGroup, Card } from "react-bootstrap";
export default class HomeServices extends Component {
  constructor() {
    super();
    this.state = { index: 0, direction: null };
  }

  render() {
    return (
      <Container>
        <Row className="section p-2">
          <div className="section-title text-center">
            <h2>
              Notre <span>service</span>
            </h2>
          </div>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Consultancy</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum ante vel aliquet.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Consultancy</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum ante vel aliquet.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Consultancy</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum ante vel aliquet.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    );
  }
}
