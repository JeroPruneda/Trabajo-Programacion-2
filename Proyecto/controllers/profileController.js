var db = require("../database/models")

const controller = {
    profile: function(req, res) {
        db.Usuarios.findByPk(req.session.usuario.id, {include })
        .then(function (user) {
            res.render('profile', { usuario });
        })
        .catch(function (error) {
            res.send(error)
        });
    },
    
    edit: function(req, res) {
        res.render("index", {title: "Editar"})
    },
}

module.exports = controller;