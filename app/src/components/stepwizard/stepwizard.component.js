import "./stepwizard.component.css";
import React, { Component, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StepWizard = ({ steps, handleSubmit }) => {
  const minimumStepCount = 3; // minimum steps count
  const maximumStepCount = 7; // maximum steps count
  const [activeStep, setActiveStep] = useState(steps[0]); // active step
  // form data
  const [formData, setFormData] = useState({});
  // function to handle input control change
  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  //function to handle next button click
  const handleNext = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    //check if it is last step else increase step index by one
    if (index === steps.length - 1) {
      handleSubmit(formData);
      return;
    } else {
      setActiveStep(steps[index + 1]);
    }
  };
  // function to handle back button click
  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    //check if it is first step else decrease step index by one
    if (index === 0) return;
    setActiveStep(steps[index - 1]);
  };

  //function to handle next button click
  const handleSelect = (e) => {
    const key = e.target.dataset.id;
    const index = steps.findIndex((x) => x.key === key);
    //check if it is last step else increase step index by one
    if (activeStep.key === key) {
      return;
    } else {
      setActiveStep(steps[index]);
    }
  };

  return (
    <div className="box">
      {steps.length < minimumStepCount || steps.length >= maximumStepCount ? (
        // steps minimum and maximum check error message
        <span className="text-danger">
          Minimum steps should be more than or equal to 3 and should be less
          than or equal to 7.
        </span>
      ) : (
        <div>
          <Card className="bg-transparent border-0">
            <Card.Header className="bg-transparent border-0">
              <ul className="wizard-card text-center w-100">
                {steps.map((d) => {
                  // Return the element. Also pass key
                  return (
                    <li
                      data-id={d.key}
                      onClick={handleSelect}
                      id={d.key}
                      key={d.key}
                      className={
                        d.key === activeStep.key ? "col active" : "col"
                      }
                    >
                      <div className="d-none d-md-block">{d.label}</div>
                    </li>
                  );
                })}
              </ul>
            </Card.Header>
            <Card.Body className="bg-transparent border-0">
              {activeStep.component({
                formData: formData,
                handleFormData: handleInputData,
              })}
            </Card.Body>
            <Card.Footer className="bg-transparent d-flex justify-content-between border-0">
              <Button
                onClick={handleBack}
                disabled={steps[0].key === activeStep.key}
              >
                Précédent
              </Button>
              <Button
                className="pull-left"
                value={
                  steps[steps.length - 1].key !== activeStep.key
                    ? "Next"
                    : "Submit"
                }
                onClick={handleNext}
              >
                {steps[steps.length - 1].key !== activeStep.key
                  ? "Suivant"
                  : "Confirmer"}
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StepWizard;
