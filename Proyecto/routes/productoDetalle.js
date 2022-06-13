var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController")

router.get('/', controller.detalle);
router.get('/add', controller.add);
router.get('/show', controller.show);

router.post('/add', controller.guardar);


module.exports = router;