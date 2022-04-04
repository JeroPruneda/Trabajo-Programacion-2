var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')

router.get('/', controller.profile);
router.get('/login', controller.login);
router.get('/register', controller.register);


module.exports = router;