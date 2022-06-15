var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')



// router.get('/me', controller.profile);


/* router.get('/register', controller.register); */ 


router.get('/me', controller.myProfile); //COMENTE ESTE PORQUE ESTAMOS TIENEN 2 PROFILE
router.get('/me/edit', controller.edit);
router.post('/me/edit', controller.edit);

router.get('/:id', controller.profile);



module.exports = router;