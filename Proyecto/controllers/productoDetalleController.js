var db = require("../database/models")
var data = require("../data/dbd");

const controller = {
search: function(req, res, ) {
       res.render('productoDetalle', {data : data});
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
