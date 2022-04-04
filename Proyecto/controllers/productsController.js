//var autos = require('../db/autos'); aca requerimos los productos que vamos hacer
<<<<<<< HEAD
var zapatilla = require("../data/db");
var products = require("../routes/products")
=======
var data = require("../data/db");

>>>>>>> 68a5fe53777ed14d087aff38d2235f2e01de0b7a
const controller = {
search: function(req, res, ) {
        //buscar el producto
  },
show : function(req, res, next) {
       //const result = (producto.getCarsByModel(req.params.model, req.params.anio)); (mostrariamos los productos)
       if (result.length == 0) {
        //res.send('No hay este modelo de producto ' + req.params.model); (sin no hay de ese producto)
         
        }
        res.send(result);
       },
    add: function(req, res){
           //para agregar el producto
       }

}
module.exports = controller;
