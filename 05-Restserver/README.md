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

# Subir a Heroku
$ git push heroku master
