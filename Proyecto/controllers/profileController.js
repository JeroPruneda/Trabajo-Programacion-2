var db = require("../database/models");
const hasher = require("bcryptjs")
var multer = require('multer');
const upload = multer({
    dest: 'public/images/upload'
})

const controller = {
     myProfile: function(req, res) {
        //  res.render('profile', { usuario, productos });
         db.Usuarios.findByPk(req.session.usuario.id, 
            { include: [{all  : true, nested :false}]})
             .then(function (me) {    
                 res.render('myProfile', { me });
             })
             .catch(function (error) {
                 res.send(error)
             }); 
     },
    
    profile: function(req, res) {
        db.Usuarios.findByPk(req.params.id, 
            {include: [{all  : true, nested :false}]})
            .then(function (usuario) {
                res.render('profile', { usuario});
            })
            .catch(function (error) {
                res.send(error)
            });
        },

   
    edit: function(req, res) {
           db.Usuarios.findByPk(req.params.id)
               .then(function (usuarios) {
                   res.render('profile-edit', { usuarios });
               })
               .catch(function (error) {
                   res.send(error);
               })
               },
   
    update: function(req, res) {
        req.body.contrasenia  = hasher.hashSync(req.body.contrasenia, 10);
           if (req.file) req.body.perfil = (req.file.path).replace('public', '');
           db.Usuarios.update(req.body, { where: { id: req.params.id } })
               .then(function(usuarios) {
                   console.log(usuarios);
                   res.redirect('/')
               })
               .catch(function(error) {
                   res.send(error);
               })
       },

}


module.exports = controller;