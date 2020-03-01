const express = require('express');
const Producto = require('../models/producto');
const {verificarToken} = require('../middlewares/autenticacion');
const app = express();


app.get('/producto/buscar/:termino', verificarToken, (req, res) => {
    
    let termino = req.params.termino;

    let regex = new RegExp(termino, 'i');

    Producto.find({nombre: regex})
        .populate('categoria', 'nombre')
        .exec((err, productos) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                productos
            });
        })
            
})


app.get('/producto', verificarToken, (req, res) => {

    let desde = Number(req.query.desde) || 0;

    Producto.find({disponible:true})
        .sort('descripcion')
        .populate('usuario','nombre email')
        .populate('categoria','descripcion')
        .skip(desde)
        .limit(5)
        .exec((err, productos) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Producto.count((err, cuenta) => {

                res.json({
                    ok: true,
                    productos,
                    cuantos: cuenta
                });
            });
        })
})


app.get('/producto/:id', verificarToken, (req, res) => {

    let id = req.params.id;

    Producto.findById(id)
        .populate('usuario','nombre email')
        .populate('categoria','descripcion')
        .exec((err, producto) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                producto
            });

        })
})

app.post('/producto', verificarToken, (req, res) => {

    let body = req.body;
    let usuario_id = req.usuario._id; // necesario viene en el verificaToken

    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        disponible: body.disponible,
        descripcion: body.descripcion,
        categoria: body.categoria,
        usuario: usuario_id
    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            producto: productoDB
        })
    });
})

app.put('/producto/:id', verificarToken, (req, res) => {
    let id = req.params.id;
    let body = req.body; 

    let actualizacion  = {
        nombre: body.nombre,
        precioUni: body.precioUni,
        disponible: body.disponible,
        descripcion: body.descripcion,
        categoria: body.categoria,
    }

    Producto.findByIdAndUpdate(id, actualizacion, {new:true, runValidators:true}, (err, productoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            producto: productoDB
        })
    });
})

app.delete('/producto/:id', verificarToken, (req, res) => {
    let id = req.params.id;

    Producto.findById(id, (err, productoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Producto no encontrado"
                }
            });
        }

        productoDB.disponible = false;
        productoDB.save();

        res.json({
            ok: true,
            producto: productoDB
        })
    });
})


module.exports = app;