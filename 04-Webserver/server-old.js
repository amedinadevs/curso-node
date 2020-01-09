const express = require('express')
const app = express()


// middleware para que se ejcute siempre
app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
 
app.get('/', (req, res) => {

    let salida = {prueba: 32};
    res.send(salida);
  
})

app.get('/data', (req, res) => {

    res.send('Hello Data')
})
 
app.listen(3000, () => {
    console.log("escuchando en puerto 3000");
})