var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController");

var multer = require('multer');
const upload = multer({ dest: 'public/images/upload' });

router.get('/add', controller.add);
router.post('/add', upload.single('imagenes'), controller.guardar);

router.get('/:id', controller.detalle);
router.post('/:id/borrar', controller.borrar);
router.post('/:id/comment', upload.single('perfil'), controller.comment);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('imagenes'), controller.update);


router.get('/show', controller.show);









module.exports = router;