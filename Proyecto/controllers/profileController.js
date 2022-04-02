//var autos = require('../db/autos'); aca requerimos los productos que vamos hacer

const controller = {
    index: function(req, res) {
        res.render('index');
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;