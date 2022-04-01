//var autos = require('../db/autos'); aca requerimos los productos que vamos hacer


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
