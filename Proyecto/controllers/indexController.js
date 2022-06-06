var db = require("../database/models")
const hasher = require("bcryptjs")


const controller = {
    index: function(req, res) {
        
    },
    login: function(req, res) {
        
    },
    access: function(req, res, next) {
        db.Usuarios.findOne({where: {usuario: req.body.usuario}})
            .then (function(user){

            })
    },
    logout: function (req, res, next) {
        
    },
    register: function(req, res) {
        
    },
    store: function(req, res) {
        
    }
}

module.exports = controller;