// PUERTO
process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// TOKEN
process.env.TOKEN_CADUCIDAD = '48h'; 
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'secret-token';

// CONEXION BD
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}
else {
    // 'mongodb+srv://amedinadevs:IgrSnyOR0efNh0qB@cluster0-i7pp7.mongodb.net/cafe';
    urlDB = process.env.URLDB
}

process.env.URLDB = urlDB;