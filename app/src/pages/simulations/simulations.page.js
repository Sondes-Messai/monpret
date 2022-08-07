import React, { Component } from "react";

import Table from "react-bootstrap/Table";
import "./simulations.page.css";

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

export default class SimulationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simulations: [],
    };
    SimulationService.getSimulations().then((res) => {
      const simulations = res.data;
      this.setState({ simulations });
    });
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Projet</th>
            <th>Type de bien</th>
            <th>Cout du projet</th>
            <th>Apport</th>
            <th>Montant de votre prêt</th>
            <th>Durée d’emprunt</th>
            <th>Montant mensualité</th>
            <th>Taux d'intérêt</th>
            <th>Montant total des intérêts</th>
            <th>Montant total du prêt</th>
          </tr>
        </thead>
        <tbody>
          {this.state.simulations.map((d) => {
            const simulation = SimulationService.calculSimulation(d);
            return (
              <tr>
                <td>1</td>
                <td>{simulation.labelProjetImmobilier}</td>
                <td>
                  {simulation.labelTypeBien} / {simulation.labelNatureBien}
                </td>
                <td>{amountFormat(simulation.montantProjet)}</td>
                <td>{amountFormat(simulation.montantApport)}</td>
                <td>{amountFormat(simulation.montantCredit)}</td>
                <td>{simulation.duree}</td>
                <td>{amountFormat(simulation.montantMensualite)} / mois</td>
                <td>{percentageFormat(simulation.interetAnnuel)}</td>
                <td>{amountFormat(simulation.montantTotalInterets)}</td>
                <td>{amountFormat(simulation.montantTotalCredit)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
