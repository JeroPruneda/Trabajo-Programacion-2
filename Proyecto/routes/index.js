var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')


router.get('/', controller.index);

router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/results', controller.results);
router.get('/add', controller.add);
router.post('/add', controller.store);

module.exports = router;