var express = require('express');
const { register2 } = require('../controllers/indexController');
var router = express.Router();
var controller = require('../controllers/indexController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/', controller.index);
router.get("/search-results", controller.search);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/register', controller.register);
/* router.post('/register', controller.register2); */
router.post('/register', upload.single('perfil'), controller.register2);

router.get('/logout', controller.logout);

//router.get('/results', controller.results);

//router.get('/add', controller.add);





module.exports = router;