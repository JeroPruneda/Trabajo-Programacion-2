var db = require("../database/models")
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
        db.Usuarios.create({
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
        res.render('index');
    },
    access: function(req, res) {
         db.Usuarios.findOne({ where: { usuario: req.body.usuario }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.contraseña, user.contraseña)) {
                    req.session.user = user;
                    if (req.body.rememberme) {
                        res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                    }
                    res.redirect('/');
                } else {
                    throw Error('Invalid credentials.')
                }
            })
            .catch(function (error) {
                res.send(error);
            })
    },
<<<<<<< HEAD
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },
=======
>>>>>>> b874d36e2e437cd9609594f8e37231fefd7505c7
}

module.exports = controller;