
var data = require("../data/db");
var products = require("../routes/products")

const controller = {
search: function(req, res, ) {
       res.render('products');
       },
add: function(req, res, ) {
       res.render('products-add');
       },
show : function(req, res, next) {
      res.render('search-results');
       },
}
module.exports = controller;
