const hbs = require('hbs');

// helpens
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    return texto.toUpperCase();
})


 