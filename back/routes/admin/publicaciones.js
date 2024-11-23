var express = require('express');
var router = express.Router();
var publicacionesModels = require('../../models/publicacionesModels.js');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */

router.get('/', async function(req, res, next) {

    var publicaciones = await publicacionesModels.getPublicaciones();

    publicaciones = publicaciones.map(publicacion => {
      if (publicacion.img_id) {
        const imagen = cloudinary.image(publicacion.img_id, {
          width: 50,
          height: 50,
          crop: 'fill'
        });
        return {
          ...publicacion,
          imagen
        }
      } else {
        return {
          ...publicacion,
          imagen: ''
        }
      }
    })

    res.render('admin/publicaciones', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      publicaciones
    });
  });

  router.get('/agregarPublicaciones', (req, res, next) => {
    res.render('admin/agregarPublicaciones', {
      layout: 'admin/layout'
    })
  });

  router.post('/agregarPublicaciones', async (req, res, next) => {
    try {

      var img_id = '';
      if (req.files && Object.keys(req.files).length > 0) {
        imagen_publicacion = req.files.imagen_publicacion;
        img_id = (await uploader(imagen_publicacion.tempFilePath)).public_id
      }

      if (req.body.nombre_publicacion != "" && req.body.descripcion_publicacion != "" && req.body.precio_publicacion != "") {
        await publicacionesModels.inserPublicaciones({
          ...req.body,
          img_id
        });
        res.redirect('/admin/publicaciones')
      } else {
        res.render('admin/agregarPublicaciones', {
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
        })
      }
    } catch (error) {
      // console.log(error)
      res.render('admin/agregarPublicaciones', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo la publicacion'
      })
    }
  })

  router.get('/eliminarPublicacion/:id', async (req, res, next) => {
    
    var id = req.params.id;
    let publicacion = await publicacionesModels.getPublicacionById(id);

    if (publicacion.img_id) {
      await (destroy(publicacion.img_id));
    }

    await publicacionesModels.borrarPublicacionById(id);
    res.redirect('/admin/publicaciones');
  });

  router.get('/modificarPublicacion/:id', async (req, res, next) => {
    var id = req.params.id;
    // console.log(req.params.id);
    var publicacion = await publicacionesModels.getPublicacionById(id);

    res.render('admin/modificarPublicacion', {
      layout: 'admin/layout',
      publicacion
    })
  });

  router.post('/modificarPublicacion', async (req, res, next) => {
    try {

      let img_id = req.body.img_original;

      // console.log(img_id);

      let borrar_img_vieja = false;

      if (req.body.img_delete === '1') {
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          imagen_publicacion = req.files.imagen_publicacion;
          img_id = (await uploader(imagen_publicacion.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }

      var obj = {
        descripcion_publicacion: req.body.descripcion_publicacion,
        img_id
      }
      // console.log(obj)
      await publicacionesModels.modificarPublicacionById(obj, req.body.id_publicacion);
      res.redirect('/admin/publicaciones');
    } catch (error) {
      // console.log(error)
      res.render('admin/modificarPublicacion', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico la publicacion'
      })
    }
  });

module.exports = router;