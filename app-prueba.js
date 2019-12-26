const argv = require('yargs')
    .command('info','Información del empleado',{
        id: {
            demand: true,
            alias: 'x'
        }
    })    
    .help()
    .argv;
// node app-prueba info --id 2
// node app-prueba info -x 2


const {writeSalario} = require('./async-await2'); // ./ fichero
// const funciones = require('./async-await2');
// funciones.writeSalario(2)...


writeSalario(argv.id)
.then(mensaje => {
    console.log(mensaje);
})
.catch(err => {
    console.log(err);
})