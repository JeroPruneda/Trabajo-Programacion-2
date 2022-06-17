var express = require('express');
const { register2 } = require('../controllers/indexController');
var router = express.Router();
var controller = require('../controllers/indexController')
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
	destination: (req, file, cb) => { //Ruta de destino
    		cb(null, path.join(__dirname, './public/images/uploads'));
	},
	filename: (req, file, cb) => { //File me trae toda la info y con extname extraigo la extensión.
    		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});
let upload = multer({ storage: storage }); 

router.get('/', controller.index);
router.get("/search-results", controller.search);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/register', controller.register);
/* router.post('/register', controller.register2); */
router.post('/register', upload.single('uploads'), controller.register2);

router.get('/logout', controller.logout);

//router.get('/results', controller.results);

//router.get('/add', controller.add);





module.exports = router;