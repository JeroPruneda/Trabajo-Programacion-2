
var data = require("../data/db");

const controller = {
    index: function(req, res) {
        res.render('index', 
        {data : data},
        {logueado:true},
        {usario:data.usuario},

        
        );

    },
    login: function(req, res) {
        res.render('login',{
            usuario: data.usuario,
            logueado:true,

        });
    },
    register: function(req, res) {
        res.render('register',{
            usario:data.usuario,
            logueado:true,
        });
    }
}

module.exports = controller;