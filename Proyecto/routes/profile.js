var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/upload' });

router.get('/me', controller.myProfile);
router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('perfil'), controller.update);
router.get('/:id', controller.profile);




module.exports = router;