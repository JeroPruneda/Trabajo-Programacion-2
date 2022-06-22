var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController");

var multer= require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/upload')) 
    },
    filename : function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage})

/* 
router.get('/', controller.index); */

router.get('/add', controller.add);
router.post('/add', upload.single('imagenes'), controller.guardar);

router.get('/:id', controller.detalle);
router.post('/:id/borrar', controller.borrar);
router.post('/:id/comment', upload.single("perfil"), controller.comment);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('imagenes'), controller.update);


router.get('/show', controller.show);



/* router.post('/:id/edit', upload.single('cover'), controller.update); */





module.exports = router;