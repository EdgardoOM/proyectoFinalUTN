var express = require('express');
var router = express.Router();
var productosModels = require('./../models/productosModels');
var publicacionesModels = require('./../models/publicacionesModels');
var comentariosModels = require('./../models/comentariosModels');
var cloudinary = require('cloudinary').v2;

router.get('/productos', async function (req, res, next) {
    
    let productos = await productosModels.getProductos();

    productos = productos.map(productos => {
        if (productos.img_id) {
            const imagen = cloudinary.url(productos.img_id, {
                width: 248,
                height: 248,
                crop: 'fill'
            });
            return {
                ...productos,
                imagen
            }
        } else {
            return {
                ...productos,
                imagen: ''
            }
        }
    });
    res.json(productos);
});

router.get('/publicaciones', async function (req, res, next) {
    
    let publicaciones = await publicacionesModels.getPublicaciones();

    publicaciones = publicaciones.map(publicaciones => {
        if (publicaciones.img_id) {
            const imagen = cloudinary.url(publicaciones.img_id, {
                width: 248,
                height: 248,
                crop: 'fill'
            });
            return {
                ...publicaciones,
                imagen
            }
        } else {
            return {
                ...publicaciones,
                imagen: ''
            }
        }
    });
    res.json(publicaciones);
});

router.get('/comentarios', async function (req, res, next) {
    
    let comentarios = await comentariosModels.getComentarios();

    comentarios = comentarios.map(comentarios => {
        if (comentarios.img_id) {
            const imagen = cloudinary.url(comentarios.img_id, {
                width: 90,
                height: 90,
                crop: 'fill'
            });
            return {
                ...comentarios,
                imagen
            }
        } else {
            return {
                ...comentarios,
                imagen: ''
            }
        }
    });
    res.json(comentarios);
});

module.exports = router;