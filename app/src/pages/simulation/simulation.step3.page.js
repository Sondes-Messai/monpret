import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const SimulationStepThree = ({ formData, handleFormData }) => {

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Montant du projet </Form.Label>
        <Form.Control
          type="text"
          name="credit"
          placeholder="€"
          value={formData.budget ? formData.budget : ""}
          onChange={handleFormData("budget")}
        />
      </Form.Group>
      <Form.Label>Echéance</Form.Label>
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <Form.Range
            className="mb-3"
            min="0"
            max="30"
            step="1"
            value={formData.duree ? formData.duree : ""}
            onChange={handleFormData("duree")}
          />
        </div>
        <div className="p-2">
          <Form.Control
            type="number"
            min="0"
            max="30"
            value={formData.duree ? formData.duree : ""}
            onChange={handleFormData("duree")}
          />
        </div>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Montant apport</Form.Label>
        <Form.Control
          type="text"
          name="apport"
          placeholder="€"
          value={formData.apport ? formData.apport : ""}
          onChange={handleFormData("apport")}
        />
      </Form.Group>
      <div className="d-flex d-none">
      <Form.Label>Taux intérêts </Form.Label>
        <div className="p-2 flex-grow-1">
          <Form.Range
            className="mb-3"
            min="0"
            max="100"
            step="0.01"
            placeholder="%"
            value={formData.taux ? formData.taux : ""}
            onChange={handleFormData("taux")}
          />
        </div>
        <div className="p-2">
          <Form.Control
            type="number"
            min="0"
            max="100"
            step="0.01"
            placeholder="%"
            value={formData.taux ? formData.taux : ""}
            onChange={handleFormData("taux")}
          />
        </div>
      </div>
      <div className="d-flex d-none">
      <Form.Label>Taux d'assurance </Form.Label>
        <div className="p-2 flex-grow-1">
          <Form.Range
            className="mb-3"
            min="0"
            max="100"
            step="0.01"
            placeholder="%"
            value={formData.tauxAssurance ? formData.tauxAssurance : ""}
            onChange={handleFormData("tauxAssurance")}
          />
        </div>
        <div className="p-2">
          <Form.Control
            type="number"
            min="0"
            max="100"
            step="0.01"
            placeholder="%"
            value={formData.tauxAssurance ? formData.tauxAssurance : ""}
            onChange={handleFormData("tauxAssurance")}
          />
        </div>
      </div>
    </div>
  );
};

export default SimulationStepThree;
