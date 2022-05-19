
var data = require("../data/db");

const controller = {
    index: function(req, res) {
        res.render('index', {
        data : data,
        
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
            
        });
},

    register: function(req, res) {
        res.render('register',{
            usario:data.usuario,
            
        });
    },
    add: function(req, res) {
        res.render('products-add');
    },

    store: function(req,res){
        if(!req.body.email){throw Error('Not email provided.')}
        const hashedContraseña = hasher.hashSync(req.body.contraseña, 10);
        db.Usuario.create({
            usuario:req.body.usuario,
            contraseña:hashedContraseña,
            email: req.body.email

        })
        .then(function(){
            res.redirect('/');
        })
        .catch(function(error){
            res.send(error);
        })
    }
    
}

module.exports = controller;