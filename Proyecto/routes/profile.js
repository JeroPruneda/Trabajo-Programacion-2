var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')



// router.get('/me', controller.profile);
router.get('/me/edit', controller.edit);

/* router.get('/register', controller.register); */

router.get('/me', controller.myProfile);
router.get('/me/edit', controller.edit);
router.post('/me/edit', controller.edit);



router.get('/:id', controller.profile);

module.exports = router;