import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import RadioCardComponent from "../../components/radiocard/radiocard.component";

import Config from "../../config/simulation.config";


const SimulationStepOne = ({ formData, handleFormData }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Projet immobilier </Form.Label>
        <RadioCardComponent
          radiocards={Config.projetImmobilier}
          property="type_projet"
          formData={formData}
          handleInputData={handleFormData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Type de bien</Form.Label>
        <RadioCardComponent
          radiocards={Config.typeBien}
          property="type_bien"
          formData={formData}
          handleInputData={handleFormData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nature du bien </Form.Label>
        <RadioCardComponent
          radiocards={Config.natureBien}
          property="nature_bien"
          formData={formData}
          handleInputData={handleFormData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Usage de ce bien</Form.Label>
        <RadioCardComponent
          radiocards={Config.usageBien}
          property="usage_bien"
          formData={formData}
          handleInputData={handleFormData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Pays</Form.Label>
        <Form.Select
          name="type"
          value={formData.pays_bien ? formData.pays_bien : ""}
          onChange={handleFormData("pays_bien")}
        >
          <option>France</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ville</Form.Label>
        <Form.Select
          name="type"
          value={formData.ville_bien ? formData.ville_bien : ""}
          onChange={handleFormData("ville_bien")}
        >
          <option>LILLE</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default SimulationStepOne;
