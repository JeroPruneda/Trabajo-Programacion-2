var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')


router.get('/', controller.index);


router.get('/results', controller.results);
router.get('/add', controller.add);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/logout', controller.logout);

//router.post('/add', controller.store); para poder agregar los productos
router.post('/register', controller.store); //para poder 
router.post('/login', controller.access);


module.exports = router;