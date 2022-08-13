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
          <Col md={9} sm={9} xs={9}>
            
           Les frais bancaires et les financements pour un projet ou un bien sont souvent des démarches longues et compliquées.
            Pour y voir plus clair et gagner du temps, Si claire.fr vous conseille et vous donne la possibilité de comparer les banques,
            crédits à la consommation, 
            crédits immobiliers, 
            assurances emprunteurs, 
            rachats de crédit et produits d’épargne 
          </Col>
        </Row>
      </Container>
    );
  }
}
