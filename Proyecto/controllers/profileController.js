//var autos = require('../db/autos'); aca requerimos los productos que vamos hacer
var data = require("../data/db");

const controller = {
    profile: function(req, res) {
        res.render('profile');
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;