var express = require('express');
var router = express.Router();
var productosModels = require('./../../models/productosModels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */

router.get('/', async function(req, res, next) {

    var productos = await productosModels.getProductos();

    // console.log(productos);

    productos = productos.map(producto => {
      if (producto.img_id) {
        const imagen = cloudinary.image(producto.img_id, {
          width: 50,
          height: 50,
          crop: 'fill'
        });
        return {
          ...producto,
          imagen
        }
      } else {
        return {
          ...producto,
          imagen: ''
        }
      }
    })

    res.render('admin/productos', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      productos
    });
  });

  router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
      layout: 'admin/layout'
    })
  });

  router.post('/agregar', async (req, res, next) => {
    try {

      var img_id = '';
      if (req.files && Object.keys(req.files).length > 0) {
        imagen_producto = req.files.imagen_producto;
        img_id = (await uploader(imagen_producto.tempFilePath)).public_id
      }

      if (req.body.nombre_producto != "" && req.body.descripcion_producto != "" && req.body.precio_producto != "") {
        await productosModels.inserProductos({
          ...req.body,
          img_id
        });
        res.redirect('/admin/productos')
      } else {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
        })
      }
    } catch (error) {
      // console.log(error)
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo el producto'
      })
    }
  })

  router.get('/eliminar/:id', async (req, res, next) => {
    
    var id = req.params.id;
    let producto = await productosModels.getProductoById(id);

    if (producto.img_id) {
      await (destroy(producto.img_id));
    }

    await productosModels.borrarProductoById(id);
    res.redirect('/admin/productos');
  });

  router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    // console.log(req.params.id);
    var producto = await productosModels.getProductoById(id);

    res.render('admin/modificar', {
      layout: 'admin/layout',
      producto
    })
  });

  router.post('/modificar', async (req, res, next) => {
    try {

      let img_id = req.body.img_original;

      // console.log(img_id);

      let borrar_img_vieja = false;

      if (req.body.img_delete === '1') {
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          imagen_producto = req.files.imagen_producto;
          img_id = (await uploader(imagen_producto.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }

      var obj = {
        nombre_producto: req.body.nombre_producto,
        descripcion_producto: req.body.descripcion_producto,
        precio_producto: req.body.precio_producto,
        img_id
      }
      // console.log(obj)
      await productosModels.modificarProductoById(obj, req.body.id_producto);
      res.redirect('/admin/productos');
    } catch (error) {
      // console.log(error)
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico el producto'
      })
    }
  });

module.exports = router;