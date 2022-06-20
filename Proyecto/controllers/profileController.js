var db = require("../database/models");
const usuario = db.Usuarios
const productos = db.zapas
var multer = require('multer');
const upload = multer({
    dest: '..public/images/upload'
})

const controller = {
    //  myProfile: function(req, res) {
    //     //  res.render('profile', { usuario, productos });
    //      db.Usuarios.findByPk(req.session.usuario.id, { include: [ { association: "objetos" } ] })
    //          .then(function (usuario) {
                
    //              res.render('profile', { usuario : usuario });
    //          })
    //          .catch(function (error) {
    //              res.send(error)
    //          }); 
    //  },
    
    profile: function(req, res) {
        db.Usuarios.findByPk(req.params.id, {include: [{association : "objetos"}]})
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            });
        
        //res.render('profile', { usuario, productos });
        /* db.Usuarios.findByPk(req.params.id, { include: [ { association: 'objetos' } ] })
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            }); */
        /* console.log(usuario)
         //SOLO TENGAMOS UN PROFILE
             db.Usuarios.findByPk(req.params.id, { include: [ { association: 'objetos' } ] })
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            });    */
    },
    /* edit:  function(req, res) {
        res.render('profile-edit', { title: 'Edit'});
    }, */
    /* function(req, res) {
         productos.findByPk(req.params.id)
             .then(function (usuario) {
                 res.render('profile-edit', { usuario });
             })
             .catch(function (error) {
                 res.send(error);
             })  */
     
   /*  update: function(req, res) {
         if (req.file) req.body.perfil = (req.file.path).replace('public', ''); 
        db.Usuarios.update(req.body, { where: { id: req.params.id } })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    } */
   
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