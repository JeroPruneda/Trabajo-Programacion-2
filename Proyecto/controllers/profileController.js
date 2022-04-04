//var autos = require('../db/autos'); aca requerimos los productos que vamos hacer
var data = require("../data/db");

const controller = {
    profile: function(req, res) {
        res.render('profile');
    },
    edit: function(req, res) {
        res.render('profile-edit');
    },
    register: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;