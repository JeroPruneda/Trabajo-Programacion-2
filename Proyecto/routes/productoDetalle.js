var express = require('express');
var router = express.Router();
var controller = require("../controllers/productoDetalleController");
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
	destination: (req, file, cb) => { //Ruta de destino
    		cb(null, path.join(__dirname, '../public/images/uploads'));
	},
	filename: (req, file, cb) => { //File me trae toda la info y con extname extraigo la extensión.
    		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});
let upload = multer({ storage: storage }); 
/* 
router.get('/', controller.index); */

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('imagenes'), controller.update);

router.get('/add', controller.add);
router.post('/add', upload.single('imagenes'), controller.guardar);


router.get('/show', controller.show);
router.get('/:id', controller.detalle);


/* router.post('/:id/edit', upload.single('cover'), controller.update); */





module.exports = router;