const argv = require('yargs')
    .command('crear','Crea un elemento',{ // node app crear -d "Texto a introducir"
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por hacer'
            }
        }
    )
    .command('actualizar','Actualiza un elemento',{ // node app actualizar -d "Texto a introducir" -c true
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true, 
            alias: 'c',
            desc: 'Marca como completada o pendiente la tarea'
        }
    }
    )
    .command('borrar','Borrar un elemento',{ // node app borrar -d "Texto a introducir"
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por borrar'
            }
        }
    )
    .help()
    .argv;

module.exports = {
    argv
}



