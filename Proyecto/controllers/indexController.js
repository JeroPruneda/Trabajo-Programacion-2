var db = require("../database/models")
var data = require("../data/db");

const controller = {
    index: function(req, res) {
         res.render('index', {data : data});
        // db.Productos.findAll()
        // .then(function (productos) {
        //     res.render('index', { productos });
        // })
        // .catch(function (error) {
        //     res.send(error)
        // });
     
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
        res.render('register');
    },
    add: function(req, res) {
        res.render('products-add');
    },

    store: function(req,res){
        
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
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },

}

module.exports = controller;