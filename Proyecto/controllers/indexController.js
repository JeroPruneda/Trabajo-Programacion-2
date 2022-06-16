var db = require("../database/models");
var op = db.Sequelize.Op;
const hasher = require("bcryptjs")


const controller = {
    
    index: function(req, res) {
        db.zapas.findAll()
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
    register2: async function(req, res, next) {
         try {
             if (!req.body.usuario) { throw Error('Not username provided.') } 
            if (!req.body.email) { throw Error('Not email provided.') }
            if (req.body.contrasenia.length < 4) { throw Error('Password too short.') }
            const usuarios = await db.Usuarios.findOne({ where: { email: req.body.email } })  
             if (usuarios) { throw Error('Email already in use.') }    
        } catch (err) {
            return res.render('register', { error: err.message });
        } 
        const hashedPassword = hasher.hashSync(req.body.contrasenia, 10);
        db.Usuarios.create({
                usuario: req.body.usuario,
                contrasenia: hashedPassword,
                email: req.body.email,
                documento: req.body.documento,
                fecha_de_nacimiento: req.body.fecha_de_nacimiento,
                perfil: req.body.perfil
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    access:  function(req, res, next) {
        db.Usuarios.findOne({ where: { usuario: req.body.usuario }})
            .then(function(usuario) {
                if (!usuario) throw Error('User not found.')
                if (hasher.compareSync(req.body.contrasenia, usuario.contrasenia)) {
                    req.session.usuario = usuario;
                    if (req.body.recordarme) {
                        res.cookie('usuarioId', usuario.id, { maxAge: 1000 * 60 * 60 * 7 })
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
    
    search: function (req, res) {
        db.zapas.findAll({
            where: {
                [op.or]: [
                    {marca: {[op.like]: "%"+req.query.criteria+"%"}},
                    {modelo: {[op.like]: "%"+req.query.criteria+"%"}}
                ]
            },
            include: [{association: "duenio"}]
        })
        .then(function (productos) {
            res.render("index", {productos});
        })
        .catch (function (error) {
            res.send(error)
        });
    },

    logout: function (req, res, next) {
        req.session.usuario = null;
        res.clearCookie('usuarioId');
        res.redirect('/')
    }, 

}

module.exports = controller;