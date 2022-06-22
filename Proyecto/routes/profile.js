var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')


var multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/upload')) 
    },
    filename : function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage})

/* router.get('/me', controller.miPerfil); */


/*  router.get('/register', controller.register);  */


 //COMENTE ESTE PORQUE ESTAMOS TIENEN 2 PROFILE
router.get('/me', controller.myProfile);
router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('perfil'), controller.update);
/* router.post('/me/edit', controller.edit); */
//router.post('/me/edit', upload.single('perfil'), controller.update);
router.get('/:id', controller.profile);
// router.get('/perfiles/:id', controller.perfiles);



module.exports = router;