let personas = [
    {
        id: 1, 
        nombre: "Alex",
        edad: 34,
        profesion: "Programador",
        salario: 1000
    },
    {
        id: 2, 
        nombre: "Juan",
        edad: 24,
        profesion: "Veterinario",
        salario: 3000
    },
    {
        id: 3, 
        nombre: "Miguel",
        edad: 39,
        profesion: "Arquitecto",
        salario: 2000
    },
    {
        id: 4, 
        nombre: "Mari Paz",
        edad: 50,
        profesion: "Camarero",
        salario: 500
    },
];


let getNombre = (id) => {
    let persona = personas.find(x=> x.id === id);
    if(!persona){
        throw new Error ("No se ha encontrado persona");
    }
    else return persona.nombre;
}

let getSalario = (id) => {
    let persona = personas.find(x=> x.id === id);
    if(!persona){
        throw new Error ("No se ha encontrado persona");
    }
    else return persona.salario;
}

let writeSalario = async(id) => {
    let nombre = await getNombre(id);
    let salario = await getSalario(id);

    return `${nombre} tiene un salario de ${salario}€`;
}


module.exports = {
    writeSalario
}



