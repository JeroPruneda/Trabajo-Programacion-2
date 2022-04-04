var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')

router.get('/', controller.profile);
router.get('/edit', controller.edit);
router.get('/register', controller.register);


module.exports = router;