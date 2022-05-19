var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController")

router.get('/', controller.search);
router.get('/add', controller.add);
router.post('/add', controller.store);



module.exports = router;