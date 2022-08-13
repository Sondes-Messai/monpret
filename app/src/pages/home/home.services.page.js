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
                <Card.Title>Souscrivez</Card.Title>
                <Card.Text>
                  Souscription immédiate en quelques clics seulement.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Si claire</Card.Title>
                <Card.Text>
                Plusieure utilisateurs nous ont déjà fait confiance.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Économisez</Card.Title>
                <Card.Text>
                +50 partenaires vous proposent les meilleures offres.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    );
  }
}
