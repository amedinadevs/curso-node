const express = require('express');
const Categoria = require('../models/categoria');
const {verificarToken, verificarAdminRole} = require('../middlewares/autenticacion');
const app = express();



app.get('/categoria', verificarToken, (req, res) => {

    Categoria.find()
        .sort('descripcion')
        .populate('usuario','nombre email')
        .exec((err, categorias) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Categoria.count((err, cuenta) => {

                res.json({
                    ok: true,
                    categorias,
                    cuantos: cuenta
                });
            });
        })
})


app.get('/categoria/:id', verificarToken, (req, res) => {

    let id = req.params.id;

    Categoria.findById(id)
        .populate('usuario','nombre email')
        .exec((err, categoria) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                categoria
            });

        })
})

app.post('/categoria', verificarToken, (req, res) => {

    let body = req.body;
    let usuario_id = req.usuario._id; // necesario viene en el verificaToken

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: usuario_id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })
    });
})

app.put('/categoria/:id', verificarToken, (req, res) => {
    let id = req.params.id;
    let body = req.body; 

    let descCategoria  = {
        descripcion: body.descripcion
    }

    Categoria.findByIdAndUpdate(id, descCategoria, {new:true, runValidators:true}, (err, categoriaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })
    });
})

app.delete('/categoria/:id', [verificarToken, verificarAdminRole], (req, res) => {
    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!categoriaBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Categoria no encontrada"
                }
            });
        }

        res.json({
            ok: true,
            categoria: categoriaBorrado
        })
    })
})


module.exports = app;