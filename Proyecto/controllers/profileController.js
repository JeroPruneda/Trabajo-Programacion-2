var db = require("../database/models")

const controller = {
    myProfile: function(req, res) {
        db.Usuarios.findByPk(req.session.usuario.id, { include: [ { association: 'productos' } ] })
            .then(function (Usuarios) {
                
                res.render('profile', { Usuarios : usuario });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
    profile: function(req, res) {
        db.Usuarios.findByPk(req.params.id, { include: [ { association: 'productos' } ] })
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
    edit: function(req, res) {
        res.render('index', { title: 'Edit'});
    }
    }


module.exports = controller;