import React from "react";

const projetImmobilier = [
  { key: "step1", label: "Acheter un bien", value: "1" },
  { key: "step2", label: "Construire", value: "2" },
  { key: "step3", label: "Faire des travaux", value: "3" },
];
const typeBien = [
  { key: "step1", label: "Maison", value: "1" },
  { key: "step2", label: "Appartement", value: "2" },
  { key: "step3", label: "Terrain + Construction", value: "3" },
  { key: "step4", label: "Terrain seul", value: "4" },
];
const natureBien = [
  { key: "step1", label: "Ancien", value: "1" },
  { key: "step2", label: "Neuf", value: "2" },
  { key: "step3", label: "Vente sur plan (VEFA)", value: "3" },
];
const usageBien = [
  { key: "step1", label: "Résidence principale", value: "1" },
  { key: "step2", label: "Résidence secondaire", value: "2" },
  { key: "step3", label: "Investissement locatif", value: "3" },
];
const Config =
{
  projetImmobilier: projetImmobilier,
  typeBien : typeBien,
  natureBien: natureBien,
  usageBien : usageBien
};


export default Config;
