import React from "react";
import Config from "../../config/simulation.config";
import SimulationService from "../../services/simulation.service";
export const amountFormat = (value) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export const percentageFormat = (value) =>
  new Intl.NumberFormat("fr-FR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const SimulationStepFinal = ({ formData }) => {
  //destructuring data from formdata

  formData.taux = 2.2;
  formData.tauxAssurance = 2.2;

  const simulation = SimulationService.calculSimulation(formData);

  return (
    <div>
      <p className="result">
        <strong>Nom :</strong> {simulation.emprunteur_nom} {simulation.emprunteur_prenom}
      </p>
      <p className="result">
        <strong>Email :</strong> {simulation.emprunteur_email}
      </p>
      <p className="result">
        <strong>Téléphone :</strong> {simulation.emprunteur_tel}
      </p>
      <p className="result">
        <strong>Adresse :</strong> {simulation.rue}, {simulation.cp}
        {simulation.ville}
      </p>

      <hr />

      <p className="result">
        <strong>Votre projet :</strong> {simulation.labelProjetImmobilier}
      </p>
      <p className="result">
        <strong>Type de bien :</strong> {simulation.labelTypeBien} / {simulation.labelNatureBien}
      </p>
      <p className="result">
        <strong>Cout du projet :</strong> {amountFormat(simulation.montantProjet)}
      </p>
      <p className="result">
        <strong>Apport :</strong> {amountFormat(simulation.montantApport)}
      </p>

      <hr />
      <p className="result">
        <strong>Montant de votre prêt :</strong> {amountFormat(simulation.montantCredit)}
      </p>
      <p className="result">
        <strong>Durée d’emprunt :</strong> {simulation.duree} années
      </p>
      <p className="result">
        <strong>Taux d'intérêt :</strong> {percentageFormat(simulation.interetAnnuel)}
      </p>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Montant mensualité</h5>
            <p className="card-text">
              {amountFormat(simulation.montantMensualite)} / mois
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Montant total des intérêts </h5>
            <p className="card-text"> {amountFormat(simulation.montantTotalInterets)}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Montant total du prêt</h5>
            <p className="card-text"> {amountFormat(simulation.montantTotalCredit)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimulationStepFinal;
