var db = require("../database/models")
var multer = require('multer');
const upload = multer({
    dest: '..public/images/upload'
})

const controller = {
 
detalle: function(req, res, ) {
       db.zapas.findByPk(req.params.id, 
        {include: [{all  : true, nested :false}],
        order: [['id', 'ASC']]
         
     })
       .then(function (productos) {
           // res.send(productos)
           res.render('productoDetalle', { productos});
       })
       .catch(function (error) {
           res.send(error)
       })
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
     if (!req.session.usuario) { //Si ponemos esto, no nos anda el agrega, porque toma este error, ya que no nos funciona las cookies entonces lo toma como si NO estuviera logueado entonces no te deja subirlo
       return res.render('products-add', { error: 'Not authorized.' });
    }
     req.body.usuario = req.session.usuario
     db.zapas.create({
        marca: req.body.marca,
        modelo : req.body.modelo,
        imagenes : req.body.imagenes = (req.file.path).replace('public', ''),
        descripcion : req.body.descripcion,
        usuarioId : req.body.usuario.id
        })//aca le puse para ver si me lo creaba pero no
       .then(function() {
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
                console.log(productos);
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
borrar: function (req, res) {
        if (req.session.usuario == undefined) {
           throw Error('Not authorized.')
        }
        db.zapas.destroy(
            { where: 
                {id: req.params.id }
            }
            )
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
comment: function(req, res) {
        if(!req.session.usuario){ 
            return res.render('login', {error:'Inici?? sesi??n o registrate para comentar'})
        }
        req.body.usuarioId = req.session.usuario.id;
        req.body.productoId = req.params.id;
        req.body.nombre = req.session.usuario.usuario;
        req.body.perfilc = req.session.usuario.perfil;
        db.Comentario.create({
            comentario : req.body.comentario,
            usuarioId : req.body.usuarioId,
            productoId : req.body.productoId,
            createdAt : new Date(),
            updatedAt : new Date(),
            nombre : req.body.nombre,
            perfilc : req.body.perfilc
            
        })
            .then(function () {
                res.redirect("/productoDetalle/" + req.params.id)
            })
            .catch(function (error) {
                res.send(error);
            })
    
        
    
        
            
    },
}
module.exports = controller;
