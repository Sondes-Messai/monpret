import baseService from "./base-service";
import Config from "../config/service.config";
import ConfigSimulation from "../config/simulation.config";

const createSimulation = async (data) => {
  return await baseService.post(Config.API_URL + "simulation/create", data);
}

const updateSimulation = async (data) => {
  return await baseService.put(Config.API_URL + "simulation/update", data);
}

const getSimulations = async () => {
  return await baseService.get(Config.API_URL + "simulation");
}

const deleteSimulation = async (id) => {
  return await baseService.delete(Config.API_URL +  `simulation/${id}`);
}

const calculSimulation = (formData) => {
  const {
    type_projet,
    type_bien,
    nature_bien,
    pays_bien,
    ville_bien,

    emprunteur_nom,
    emprunteur_prenom,
    emprunteur_email,
    emprunteur_tel,
    emprunteur_salaire,

    aveccoemprunteur,
    coemprunteur_nom,
    coemprunteur_prenom,
    coemprunteur_email,
    coemprunteur_tel,
    coemprunteur_salaire,

    rue,
    cp,
    Ville,

    budget,
    duree,
    apport,
    taux,
    tauxAssurance,
  } = formData;

  formData.labelProjetImmobilier = ConfigSimulation.projetImmobilier.map((element) => {
    if (element.value === type_projet) {
      return element.label;
    }
    return null;
  });

  formData.labelTypeBien = ConfigSimulation.typeBien.map((element) => {
    if (element.value === type_bien) {
      return element.label;
    }
    return null;
  });

  formData.labelNatureBien = ConfigSimulation.natureBien.map((element) => {
    if (element.value === nature_bien) {
      return element.label;
    }
    return null;
  });

  formData.interetAnnuel = parseFloat(2.25 / 100);
  formData.interetAssurance = 0.1;
  formData.periode = parseInt(duree) * 12;
  formData.montantProjet = parseFloat(budget);
  formData.montantApport = parseFloat(apport);
  formData.montantCredit = parseFloat(budget) - parseFloat(apport);

  formData.interetValue = Math.pow(1 + formData.interetAnnuel / 12, formData.periode);
  formData.montantMensualite =
    ((formData.interetAnnuel / 12) * formData.montantCredit * (formData.interetValue + 0)) /
    (formData.interetValue - 1);

  formData.montantTotalCredit = formData.montantMensualite * formData.periode;
  formData.montantTotalInterets = formData.montantTotalCredit - formData.montantCredit;

  return formData;
}

export default { createSimulation, updateSimulation, deleteSimulation, getSimulations, calculSimulation };


