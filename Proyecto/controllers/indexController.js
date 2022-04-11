
var data = require("../data/db");

const controller = {
    index: function(req, res) {
        res.render('index', {
        data : data,
        logueado: false,
        usario: data.usuario,
        productos: data.productos,
    });
},
results: function(req, res) {
    res.render('index', {
    data : data,
});
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
    },
}

module.exports = controller;