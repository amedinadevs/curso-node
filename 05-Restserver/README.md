### node-restserver
Es el restserver de curso-node

# Ejecutar el server
cd server
$ node server

# Ejecutar con nodemon
// fuera del terminal de vscode
cd server
$ nodemon server

# Dependencias extra
-- VALIDACION CAMPOS UNICOS DEL SCHEMA
$ npm install mongoose-unique-validator

-- ENCRIPTACION CONTRASEÑAS
$ npm install bcrypt --save

-- EXTENSION JS
$ npm i underscore --save

-- TOKENS
$ npm install jsonwebtoken --save

## HEROKU
https://arcane-lowlands-18017.herokuapp.com/

# Subir a Heroku
$ git push heroku master

para saber las variables de entorno de heroku
$ heroku config

$ heroku config:set NOMBRE="VALOR";


## MONGO DB
# conexión Atlas
amedinadevs
IgrSnyOR0efNh0qB
mongodb+srv://amedinadevs:IgrSnyOR0efNh0qB@cluster0-i7pp7.mongodb.net/cafe