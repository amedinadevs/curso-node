const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

// middleware para que se ejcute siempre
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alex Medina'
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
    });
})

app.listen(3000, () => {
    console.log("escuchando en puerto 3000");
})