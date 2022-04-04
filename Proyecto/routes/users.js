var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')

router.get('/me', controller.me);
router.get('/me/edit', controller.edit);

module.exports = router;
