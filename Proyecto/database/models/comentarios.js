module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        content: { type: dataTypes.STRING },
        user_id : { type: dataTypes.STRING },
        fecha: { type: dataTypes.DATE },
        descripcion: { type: dataTypes.STRING },
        usuarioId : {type: dataTypes.INTEGER},
        productoId : {type: dataTypes.INTEGER}
    }
    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    
    const Comentarios = sequelize.define('Comentario', cols, configs);
  
    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.zapas, {
           as:'zapas',
           foreignKey :'productoId'
      });
      
}
 return Comentarios;
}