require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

async function conectarBD(){
    await mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).catch(error => console.log(error));

    console.log('conexion establecida con BD');
}

conectarBD();



app.listen(process.env.PORT , () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
})