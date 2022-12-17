import axios from "axios";

const BASE_URL = "https://beta3.api.climatiq.io";

const token = "ASG139T2A74NPSNF9900S6NA5C8M";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const getElectricityEmission = async (energy: number) => {
  const data = {
    emission_factor: {
      activity_id: "electricity-energy_source_biogas_corn_chp",
    },
    parameters: {
      energy: energy,
      energy_unit: "TJ",
    },
  };

  const response = await axios.post(
    "https://beta3.api.climatiq.io/estimate",
    data,
    config
  );
  return response.data;
};

const getFlightEmmission = async (from: string, to: string) => {
  const data = {
    legs: [
      {
        from,
        to,
      },
    ],
  };

  const response = await axios.post(
    "https://beta3.api.climatiq.io/travel/flights",
    data,
    config
  );
  return response.data;
};

const climateServices = {
  getElectricityEmission,
  getFlightEmmission,
};

export default climateServices;
