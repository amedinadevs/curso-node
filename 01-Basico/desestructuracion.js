let persona = {
    nombre: 'Alex',
    apellido: 'Medina',
    profesion: 'programador',
    edad:'34'
}

// forma normal de acceder a objetos javascript
console.log(`${persona.nombre} ${persona.apellido} es ${persona.profesion} y tiene ${persona.edad} años`);


// desestructurando un objeto
// let {nombre, apellido, profesion, edad} = persona;
// console.log(`${nombre} ${apellido} es ${profesion} y tiene ${edad} años`);

let {nombre, apellido, edad} = persona;
console.log(`${nombre} ${apellido}  y tiene ${edad} años`);