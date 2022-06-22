module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        
        comentario: { type: dataTypes.STRING },
        usuarioId : {type: dataTypes.INTEGER},
        productoId : {type: dataTypes.INTEGER},
        createdAt : {type: dataTypes.DATE},
        updatedAt : {type: dataTypes.DATE},
       
    }
    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    
    const Comentarios = sequelize.define('Comentario', cols, configs);
    Comentarios.associate = function(models) {
        Comentarios.belongsTo(models.Usuarios, {
            as: 'me',
            foreignKey: 'usuarioId'
        });
        Comentarios.belongsTo(models.zapas, {
            as: 'zapas',
            foreignKey: 'productoId'
        })
    }


    return Comentarios;
}
    /* Comentarios.associate = function(models) {
        Comentarios.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuario_id'
        });
      Comentarios.associate = function(models){
         Comentarios.belongsTo(models.zapas, {
            as:'zapas',
          foreignKey :'productoId'
     }); 
    
        Comentarios.belongsTo(models.Usuarios, {
            as:"me",
            foreignKey:"usuarioId"
        })
    } */
    

 //return Comentarios;
//}