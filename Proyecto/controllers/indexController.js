
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
    },
    access: function(req, res) {
        res.render('products-add');
        db.User.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.password, user.password)) {
                    req.session.user = user;
                    if (req.body.rememberme) {
                        res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                    }
                    res.redirect('/');
                } else {
                    throw Error('Invalid credentials.')
                }
            })
            .catch(function (err) {
                next(err)
            })
    },
    
}

module.exports = controller;