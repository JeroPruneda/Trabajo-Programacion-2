var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')


router.get('/', controller.index);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/register', controller.register);
router.post('/register', controller.store);

router.get('/logout', controller.logout);

router.get('/results', controller.results);
router.get('/add', controller.add);

module.exports = router;