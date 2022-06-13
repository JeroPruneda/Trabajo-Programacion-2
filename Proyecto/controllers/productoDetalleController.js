var db = require("../database/models")
var data = require("../data/dbd");

const controller = {
detalle: function(req, res, ) {
       db.zapas.findByPk(req.params.id)
       .then(function (productos) {
           res.render('productoDetalle', { productos : productos });
       })
       .catch(function (error) {
           res.send(error)
       });
},
add: function(req, res, ) {
       res.render('products-add', {data: data});
       },
show : function(req, res, next) {
      res.render('products-add');

       },
guardar: function(req, res) {
       db.zapas.create(req.body)
       .then(function () {
           res.redirect('index')
       })
       .catch(function (error) {
           res.send(error)
       });
       }
}
module.exports = controller;
