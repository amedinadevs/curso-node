const axios = require("axios");

const getLugarLatLng = async direccion => {
  const encodedURL = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
      "x-rapidapi-key": "49839b1713msh22312be41aadbacp140a9ajsnc7be010cf435"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No se han encontrado datos para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const nombre = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    nombre,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};
