let getNombre = (nombre) => {
    if(nombre === undefined){
        throw new Error('No se ha indicado el nombre');
    }
    
    return nombre;
}

let saludo = async(nombre)=> { // al poner async no hace falta el new Promise
    if(nombre === undefined){
        throw new Error('No se ha indicado el nombre para el saludo'); // throw Error equivale al reject
    }
    let nombre2 = await getNombre(nombre);
    return `Hola ${nombre2}` // return equivale a resolve
}

// EQUIVALE A :
// let getNombre = (nombre) => {
//     return new Promise((resolve, reject) => {
//         if(nombre === undefined){
//             reject('No se ha indicado el nombre');
//         }
//         setTimeout(() => {
//             resolve(nombre);
//         }, 3000);        
//     });
// }

//console.log(getNombre()); // Promise { 'Alex' }

// getNombre("Alex")
// .then(nombre => { 
//     console.log(nombre); // Alex
// })
// .catch(e => {
//     console.log('Error en getNombre: ',e);
// })


saludo("Alex")
.then(mensaje => {
    console.log(mensaje);
})
.catch(e => {
    console.log('Error en saludo: ',e);
})