var db = require("../database/models")
var multer = require('multer');
const upload = multer({
    dest: '..public/images/upload'
})

const controller = {
  /*   index: function(req, res) {
        db.zapas.findAll()
            .then(function (productos) {
                res.render('index', { productos });
            })
            .catch(function (error) {
                res.send(error)
            });  
    }, */
detalle: function(req, res, ) {
       db.zapas.findByPk(req.params.id)
       .then(function (productos) {
           res.render('productoDetalle', { productos });
       })
       .catch(function (error) {
           res.send(error)
       });
},
  
 add: function(req, res) {
    if (!req.session.usuario) { 
        throw Error('Not authorized.')
    }
    res.render('products-add');
}, 
show : function(req, res, next) {
      res.render('products-add');

       },
guardar: function(req, res) {
     //if (!req.session.usaurio) { //Si ponemos esto, no nos anda el agrega, porque toma este error, ya que no nos funciona las cookies entonces lo toma como si NO estuviera logueado entonces no te deja subirlo
     //    return res.render('products-add', { error: 'Not authorized.' });
    // }
     req.body.usuarioId = req.session.usaurio
     if (req.file) req.body.imagenes = (req.file.path).replace('public', '');
       db.zapas.create(req.body)
       .then(function () {
           res.redirect('/')
       })
       .catch(function (error) {
           res.send(error)
       });
       },
       edit: function(req, res) {
        db.zapas.findByPk(req.params.id)
            .then(function (productos) {
                res.render('products-edit', { productos });
            })
            .catch(function (error) {
                res.send(error);
            })
            },

        update: function(req, res) {
        if (req.file) req.body.imagenes = (req.file.path).replace('public', '');
        db.zapas.update(req.body, { where: { id: req.params.id } })
            .then(function(productos) {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
    borrar: function (req, res) {
        if (!req.session.usuario) {
            throw Error('Not authorized.')
        }
        db.zapas.destroy({ where: { id: req.params.id } })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
}
module.exports = controller;
