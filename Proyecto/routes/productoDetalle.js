var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController");
const multer = require("multer");
const upload = multer({ dest: 'public/images/uploads' });


router.get('/add', controller.add);
router.get('/show', controller.show);
router.get('/:id', controller.detalle);
router.post('/add', controller.guardar);

router.post('/:id/edit', upload.single('cover'), controller.update);
router.post('/add', upload.single('cover'), controller.store);


module.exports = router;