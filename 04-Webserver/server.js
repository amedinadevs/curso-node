const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

// middleware para que se ejcute siempre
app.use(express.static(__dirname + '/public'));

// HEROKU CONF
// login + 
// 1. para que al subirlo a HEROKU autodetecte el puerto de usar
const port = process.env.PORT || 3000;
// 2. comando start en packaje.json

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

app.listen(port, () => {
    console.log(`escuchando en puerto ${port}`);
})