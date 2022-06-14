var db = require("../database/models")


const controller = {
detalle: function(req, res, ) {
       db.zapas.findByPk(req.params.id)
       .then(function (productos) {
           res.render('productoDetalle', { productos });
       })
       .catch(function (error) {
           res.send(error)
       });
},
add: function(req, res, ) {
    res.render('products-add');
},
show : function(req, res, next) {
      res.render('products-add');

       },
guardar: function(req, res) {
    req.body.usuarioId = req.session.usaurio
       db.zapas.create(req.body)
       .then(function () {
           res.redirect('add')
       })
       .catch(function (error) {
           res.send(error)
       });
       }
}
module.exports = controller;
