var db = require("../database/models");
const usuario = db.Usuarios
const productos = db.zapas

const controller = {
    // myProfile: function(req, res) {
    //     res.render('profile', { usuario, productos });
    //   /*   db.Usuarios.findByPk(req.session.usuario.id, { include: [ { association: 'productos' } ] })
    //         .then(function (usuario) {
                
    //             res.render('profile', { usuario : usuario });
    //         })
    //         .catch(function (error) {
    //             res.send(error)
    //         }); */
    // },
    
    profile: function(req, res) {
        console.log(usuario)
        res.render('profile', { usuario, productos }); //SOLO TENGAMOS UN PROFILE
        /* db.Usuarios.findByPk(req.params.id, { include: [ { association: 'productos' } ] })
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            }); */
    },
    edit: function(req, res) {
        res.render('index', { title: 'Edit'});
    }
    }


module.exports = controller;