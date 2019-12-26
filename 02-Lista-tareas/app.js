const argv = require('./config/yargs').argv;
const tareas = require('./tareas/tareas');


// Para yargs:
// node app crear -d "Texto a introducir"
// node app listar -d
// node app actualizar -d "Texto a introducir" -c true

let comando = argv._[0];

switch(comando){
        case "crear": 
            let tarea = tareas.crear(argv.descripcion);
            console.log(tarea);
        break;
        case "listar": 
            let listado = tareas.getListado();

            console.log(`====LISTA TAREAS====`);            
            listado.forEach(tarea => {
                console.log(`${tarea.descripcion}: ${tarea.completado}`);
            });

        break;
        case "actualizar": 
            let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
            console.log(`Guardado: ${actualizado}`);
        break;
        case "borrar":
            let borrado = tareas.borrar(argv.descripcion);
            console.log(`Borrado: ${borrado}`);
            break;
        default:
            console.log("comando no reconocido");
}