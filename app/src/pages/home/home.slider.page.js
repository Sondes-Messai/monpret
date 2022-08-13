import React, { Component } from "react";

import { Row, Col, ButtonToolbar, Carousel, Card } from "react-bootstrap";

export default class HomeSlider extends Component {
  constructor() {
    super();
    this.state = { index: 0, direction: null };
  }

  render() {
    const handleCarouselSelect = (selectedIndex, e) => {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    };
    return (
      <Row>
        <Carousel
          slide={true}
          indicators={true}
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={handleCarouselSelect.bind(this)}
        >
          <Carousel.Item>
            <img
              className="imgCarouselLg"
              width="100%"
              height={500}
              alt="900x500"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            <Carousel.Caption>
              <h1>Vous avez besoin d'un prêt</h1>
              <p>
               Comparez et faites des économies sur tous vos contrats.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarouselLg"
              width="100%"
              height={500}
              alt="900x500"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            <Carousel.Caption>
              <h1>Nous vous aidons</h1>
              <p>
                pour faire le bon choix,.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }
}
