// node app -d Madrid España
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el tiempo',
        demand: true
    }
}).argv;


const res = lugar.getLugarLatLng(argv.direccion)
 .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err);
    });


