import React, { Component } from "react";
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
  handleSubmit = (formData) => {
    console.log(formData);

    SimulationService.createSimulation(formData);


  };
  render() {
    return <StepWizardComponent steps={steps} handleSubmit={this.handleSubmit} />;
  }
}
