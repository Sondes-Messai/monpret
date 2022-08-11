import React, { Component } from "react";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import { Route } from "react-router";
import HomeSlider from "./home.slider.page";
import HomeAboutUs from "./home.aboutus.page";
import HomeServices from "./home.services.page";
import HomeNewsletter from "./home.newsletter.page";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Carousel  */}
        <HomeSlider />
        {/* about us section */}
        <HomeAboutUs />
        {/* our service section  */}
        <HomeServices />
        {/* Newsletter ection*/}
        <HomeNewsletter />
      </div>
    );
  }
}
