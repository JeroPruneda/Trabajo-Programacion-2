
var data = require("../data/db");

const controller = {
    index: function(req, res) {
        res.render('index', {
        data : data,
        
    });
},
    results: function(req, res) {
<<<<<<< HEAD
        res.render('index', {
        data : data,
=======
    res.render('index', {
    data : data,
>>>>>>> fff7f8e041ce9c42546feb58409b7b323404c8fb
});
},

    login: function(req, res) {
        res.render('login',{
            usuario: data.usuario,
            
        });
},

    register: function(req, res) {
        res.render('register',{
            usario:data.usuario,
            
        });
    },
}

module.exports = controller;