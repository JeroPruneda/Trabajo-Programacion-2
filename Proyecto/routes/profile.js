var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')
const multer = require("multer");
const upload = multer({ dest: 'public/images/uploads' });




// router.get('/me', controller.profile);


/* router.get('/register', controller.register); */ 


router.get('/me', controller.myProfile); //COMENTE ESTE PORQUE ESTAMOS TIENEN 2 PROFILE
router.get('/me/edit', controller.edit);
/* router.post('/me/edit', controller.edit); */
router.post('/me/edit', upload.single('perfil'), controller.update);


router.get('/:id', controller.profile);



module.exports = router;