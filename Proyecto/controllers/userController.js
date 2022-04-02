// var autos = require('../db/autos'); aca requerimos los productos que vamos hacer
var zapatilla = require("../data/db");

const controller = {
    profile: function(req, res) {
        res.render('index');
    },
    edit: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;