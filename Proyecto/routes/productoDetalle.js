var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController")

router.get('/', controller.search);
router.get('/add/:id?', controller.add);
// router.get('/:id',controller.show)


module.exports = router;