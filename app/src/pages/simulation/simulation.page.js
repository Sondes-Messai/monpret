import React, { Component } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import RadioCardComponent from "../../components/radiocard/radiocard.component";
import StepWizardComponent from "../../components/stepwizard/stepwizard.component";

import SimulationService from "../../services/simulation.service";
import SimulationStepOne from "./simulation.step1.page";
import SimulationStepTwo from "./simulation.step2.page";
import SimulationStepThree from "./simulation.step3.page";
import SimulationStepFinal from "./simulation.step4.page";
import "./simulation.page.css";
const steps = [
  {
    key: "step1",
    label: "Votre projet immobilier",
    subLabel: "",
    component: SimulationStepOne,
  },
  {
    key: "step2",
    label: "Vos informations",
    subLabel: "",
    component: SimulationStepTwo,
  },
  {
    key: "step3",
    label: "Financement",
    subLabel: "",
    component: SimulationStepThree,
  },
  {
    key: "step4",
    label: "simulation",
    subLabel: "",
    component: SimulationStepFinal,
  },
];
/**/
export default class SimulationPage extends Component {
  constructor(props) {
    super(props);
    this.state = { simulation: null, error: null };
  }

  handleSubmit = (formData) => {
    try {
      SimulationService.createSimulation(formData).then((response) => {
        this.setState({ simulation: formData });
        console.log(formData);
      });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    let { simulation, error } = this.state;
    return (
      <Container>
        <Row className="my-3 p-3 bg-white rounded box-shadow">
          <div className="section-title text-center">
            <h2>
            Simulateur <span>crédit immobilier</span>
            </h2>
          </div>
          {error && <p>{error.message}</p>}
          {simulation && <Navigate to="/simulations" replace={true} />}
          <StepWizardComponent steps={steps} handleSubmit={this.handleSubmit} />
        </Row>
      </Container>
    );
  }
}
