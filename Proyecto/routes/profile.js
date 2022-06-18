var express = require('express');
var router = express.Router();
var controller = require('../controllers/profileController')

const multer = require('multer');
const path = require('path');

let store = multer.diskStorage({

    destination: (req,file,cb)=> {
        cb(null,path.join(__dirname, "../public/img/uploads")) 
    },
    
    filename: (req,file,cb)=> {
        cb(null,file.fieldname + '-'+ Date.now()+path.extname(file.originalname)) 
    },
})

let upload = multer ({storage:store})

// router.get('/me', controller.profile);


/* router.get('/register', controller.register); */ 


router.get('/me', controller.myProfile); //COMENTE ESTE PORQUE ESTAMOS TIENEN 2 PROFILE
router.get('/me/edit', controller.edit);
/* router.post('/me/edit', controller.edit); */
router.post('/me/edit', upload.single('perfil'), controller.update);


router.get('/:id', controller.profile);



module.exports = router;