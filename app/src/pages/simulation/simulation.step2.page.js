import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SimulationStepTwo = ({ formData, handleFormData }) => {
  return (
    <div>
      {formData.aveccoemprunteur ? formData.aveccoemprunteur : false}
      <fieldset className="mb-3">
        <legend className="w-auto text-left">Information emprenteur</legend>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNom">
            <Form.Label>Nom </Form.Label>
            <Form.Control
              placeholder="Nom"
              value={formData.emprunteur_nom ? formData.emprunteur_nom : ""}
              onChange={handleFormData("emprunteur_nom")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              placeholder="Prénom"
              value={
                formData.emprunteur_prenom ? formData.emprunteur_prenom : ""
              }
              onChange={handleFormData("emprunteur_prenom")}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="email"
              value={formData.emprunteur_email ? formData.emprunteur_email : ""}
              onChange={handleFormData("emprunteur_email")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTel">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              placeholder="Téléphone"
              value={formData.emprunteur_tel ? formData.emprunteur_tel : ""}
              onChange={handleFormData("emprunteur_tel")}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Salaire</Form.Label>
          <Form.Control
            name="emprunteur_revenu"
            placeholder="Salaire Mensuel"
            value={
              formData.emprunteur_revenu ? formData.emprunteur_revenu : ""
            }
            onChange={handleFormData("emprunteur_revenu")}
          />
          <p className="mention">le salaire doit triplé la mensualité</p>
        </Form.Group>
      </fieldset>
      <Form.Group className="mb-3">
        <Form.Check
          name="coemprunteur"
          placeholder="Coemprunteur"
          value={formData.aveccoemprunteur ? formData.aveccoemprunteur : false}
          onChange={handleFormData("aveccoemprunteur")}
          label="Avec coemprunteur"
        />
      </Form.Group>
      <fieldset
        className={"mb-3 " + (formData.aveccoemprunteur ? "" : "d-none")}
      >
        <legend className="w-auto text-left">Information co-emprenteur</legend>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNom">
            <Form.Label>Nom </Form.Label>
            <Form.Control
              placeholder="Nom"
              value={formData.coemprunteur_nom ? formData.coemprunteur_nom : ""}
              onChange={handleFormData("coemprunteur_nom")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              placeholder="Prénom"
              value={
                formData.coemprunteur_prenom ? formData.coemprunteur_prenom : ""
              }
              onChange={handleFormData("coemprunteur_prenom")}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="email"
              value={
                formData.coemprunteur_email ? formData.coemprunteur_email : ""
              }
              onChange={handleFormData("coemprunteur_email")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTel">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              placeholder="Téléphone"
              value={formData.coemprunteur_tel ? formData.coemprunteur_tel : ""}
              onChange={handleFormData("coemprunteur_tel")}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Salaire</Form.Label>
          <Form.Control
            name="coemprunteur_revenu"
            placeholder="Salaire Mensuel"
            value={
              formData.coemprunteur_revenu ? formData.coemprunteur_revenu : ""
            }
            onChange={handleFormData("coemprunteur_revenu")}
          />
          <p className="mention">le salaire doit triplé la mensualité</p>
        </Form.Group>
      </fieldset>

      <fieldset className="mb-3">
        <legend className="w-auto text-left">Adresse</legend>
        <Form.Group className="mb-3">
          <Form.Label>Rue </Form.Label>
          <Form.Control
            placeholder="Rue"
            value={formData.emprunteur_rue ? formData.emprunteur_rue : ""}
            onChange={handleFormData("emprunteur_rue")}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPrenomCodePostal">
            <Form.Label>Code postal</Form.Label>
            <Form.Control
              placeholder="Code postal"
              value={formData.emprunteur_cp ? formData.emprunteur_cp : ""}
              onChange={handleFormData("emprunteur_cp")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridVille">
            <Form.Label>Ville</Form.Label>
            <Form.Control
              placeholder="Ville"
              value={formData.emprunteur_ville ? formData.emprunteur_ville : ""}
              onChange={handleFormData("emprunteur_ville")}
            />
          </Form.Group>
        </Row>
      </fieldset>
    </div>
  );
};

export default SimulationStepTwo;
