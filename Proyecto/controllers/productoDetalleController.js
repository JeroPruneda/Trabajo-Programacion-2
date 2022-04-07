
var data = require("../data/db");
var products = require("../routes/productoDetalle")

const controller = {
search: function(req, res, ) {
       res.render('productoDetalle');
       
       },
add: function(req, res, ) {
       res.render('products-add');
       },
show : function(req, res, next) {
      res.render('products-add');
       },
}
module.exports = controller;
