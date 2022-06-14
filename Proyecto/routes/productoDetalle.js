var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController");
const multer = require("multer");
const upload = multer({ dest: 'public/images/uploads' });


router.get('/add', controller.add);
router.post('/add', upload.single('imagenes'), controller.guardar);


router.get('/show', controller.show);
router.get('/:id', controller.detalle);


/* router.post('/:id/edit', upload.single('cover'), controller.update); */



module.exports = router;