var db = require("../database/models")
var data = require("../data/dbd");

const controller = {
detalle: function(req, res, ) {
       db.zapas.findAll({include: [{association: "comentarios"}]})
       .then(function (productos) {
           res.render('index', { productos : productos });
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
              res.send(req.body);
       }
}
module.exports = controller;
