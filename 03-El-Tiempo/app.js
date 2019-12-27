// node app -d Madrid España
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el tiempo",
    demand: true
  }
}).argv;

const getTiempo = async direccion => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);

    return `El tiempo en ${coords.nombre} es ${temp}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getTiempo(argv.direccion)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log("ERROR:", error);
  });
