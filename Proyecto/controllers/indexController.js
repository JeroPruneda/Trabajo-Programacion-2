
var data = require("../data/db");

const controller = {
    index: function(req, res) {
        res.render('index', {data : data.productos});
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    }
}

module.exports = controller;