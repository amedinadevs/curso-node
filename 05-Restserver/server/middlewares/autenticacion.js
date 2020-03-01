// Verificar Token

const jwt = require('jsonwebtoken');


// obtiene información de los headers para valirdar el token
let verificarToken = (req, res, next) => {
    let token = req.get('token'); // token del header

    jwt.verify(token, process.env.TOKEN_SEED, (err, decoded) => {

            if(err){
                return res.status(401).json({
                    ok:false,
                    err : {
                        message: "Token no válido: " + err
                    }
                })
            }

            req.usuario = decoded.usuario; 

            next();
    });

}

// Verifica Admin Role
let verificarAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if(usuario.role.toString() === 'ADMIN_ROLE'){
        next();
    } 
    else {
        return res.status(401).json({
            ok:false,
            err : {
                message: "Usuario no tiene permisos para esta acción"
            }
        })
    }
}

module.exports = {
    verificarToken,
    verificarAdminRole
}