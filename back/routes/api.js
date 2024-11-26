var express = require('express');
var router = express.Router();
var productosModels = require('./../models/productosModels');
var publicacionesModels = require('./../models/publicacionesModels');
var comentariosModels = require('./../models/comentariosModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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

router.post('/Contacto', async (req, res) => {
    const mail = {
        to: 'edgardomelgim@gmail.com',
        subject: 'contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br>Ademas, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.celular}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })
})

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