const fs = require('fs');

let listaTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listaTareas);

    fs.writeFile("./db/db.json", data, (err) =>  {
        if(err) {
            throw new Error(err);
        }
    }); 
}

const cargarDB = () => {
    try{
        listaTareas = require('../db/db.json');
    }
    catch(err){
        listaTareas = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };
    listaTareas.push(tarea);

    guardarDB();

    return tarea;
};

const getListado = () => {
    cargarDB();
    return listaTareas;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index =  listaTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        listaTareas[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let listadoPorHacer = listaTareas.filter(tarea => tarea.descripcion != descripcion);
    if(listadoPorHacer.length != listaTareas.length) {
        listaTareas = listadoPorHacer;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
