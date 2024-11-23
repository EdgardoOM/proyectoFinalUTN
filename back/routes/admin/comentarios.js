var express = require('express');
var router = express.Router();
var comentariosModels = require('../../models/comentariosModels.js');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */

router.get('/', async function(req, res, next) {

    var comentarios = await comentariosModels.getComentarios();

    comentarios = comentarios.map(comentario => {
      if (comentario.img_id) {
        const imagen = cloudinary.image(comentario.img_id, {
          width: 50,
          height: 50,
          crop: 'fill'
        });
        return {
          ...comentario,
          imagen
        }
      } else {
        return {
          ...comentario,
          imagen: ''
        }
      }
    })

    res.render('admin/comentarios', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      comentarios
    });
  });

  router.get('/agregarComentarios', (req, res, next) => {
    res.render('admin/agregarComentarios', {
      layout: 'admin/layout'
    })
  });

  router.post('/agregarComentarios', async (req, res, next) => {
    try {

      var img_id = '';
      if (req.files && Object.keys(req.files).length > 0) {
        imagen_comentario = req.files.imagen_comentario;
        img_id = (await uploader(imagen_comentario.tempFilePath)).public_id
      }

      if (req.body.nombre_comentario != "" && req.body.descripcion_comentario != "" && req.body.precio_comentario != "") {
        await comentariosModels.inserComentarios({
          ...req.body,
          img_id
        });
        res.redirect('/admin/comentarios')
      } else {
        res.render('admin/agregarComentarios', {
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
        })
      }
    } catch (error) {
      // console.log(error)
      res.render('admin/agregarComentarios', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo el comentario'
      })
    }
  })

  router.get('/eliminarComentario/:id', async (req, res, next) => {
    
    var id = req.params.id;
    let comentario = await comentariosModels.getComentarioById(id);

    if (comentario.img_id) {
      await (destroy(comentario.img_id));
    }

    await comentariosModels.borrarComentarioById(id);
    res.redirect('/admin/comentarios');
  });

  router.get('/modificarComentario/:id', async (req, res, next) => {
    var id = req.params.id;
    // console.log(req.params.id);
    var comentario = await comentariosModels.getComentarioById(id);

    res.render('admin/modificarComentario', {
      layout: 'admin/layout',
      comentario
    })
  });

  router.post('/modificarComentario', async (req, res, next) => {
    try {

      let img_id = req.body.img_original;

      // console.log(img_id);

      let borrar_img_vieja = false;

      if (req.body.img_delete === '1') {
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          imagen_comentario = req.files.imagen_comentario;
          img_id = (await uploader(imagen_comentario.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }

      var obj = {
        img_id,
        usuario_comentario: req.body.usuario_comentario,
        comentario_comentario: req.body.comentario_comentario
      }
      // console.log(obj)
      await comentariosModels.modificarComentarioById(obj, req.body.id_comentario);
      res.redirect('/admin/comentarios');
    } catch (error) {
      // console.log(error)
      res.render('admin/modificarComentario', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico el comentario'
      })
    }
  });

module.exports = router;