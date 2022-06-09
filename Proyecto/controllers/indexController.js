var db = require("../database/models")
const hasher = require("bcryptjs")


const controller = {
    index: function(req, res) {
        db.Productos.findAll()
        .then(function (productos) {
            res.render('index', { productos });
        })
        .catch(function (error) {
            res.send(error)
        });
             
    },
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    register: function(req, res) {
        res.render('register');
    },
    store: async function(req, res, next) {
         try {
            /* if (!req.body.usuario) { throw Error('Not username provided.') } 
            if (!req.body.email) { throw Error('Not email provided.') }
            if (req.body.contraseña.length < 4) { throw Error('Password too short.') }
            const usuarios = await db.Usuarios.findOne({ where: { email: req.body.email } })  
             if (usuarios) { throw Error('Email already in use.') }    */
        } catch (err) {
            return res.render('register', { error: err.message });
        } 
        const hashedPassword = hasher.hashSync(req.body.contraseña, 10);
        db.Usuarios.create({
                usuario: req.body.usuario,
                contraseña: hashedPassword,
                email: req.body.email,
                documento: req.body.documento,
                fecha_de_nacimiento: req.body.fecha_de_nacimiento

            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    access: function(req, res, next) {
        db.Usuarios.findOne({where: {usuario: req.body.usuario}})
    
            // .then (function(user){
            //     if (!user) throw Error('User not found.')
            //     if (hasher.compareSync(req.body.password, user.password)) {
            //         req.session.user = user;
            //         if (req.body.rememberme) {
            //             res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
            //         }
            //         res.redirect('/');
            //     } else {
            //         throw Error('Invalid credentials.')
            //     }
            // })
    }, 
    logout: function (req, res, next) {
        req.session.usuarios = null;
        res.clearCookie('usuariosId');
        res.redirect('/')
    }, 

}

module.exports = controller;