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
        nombre: { type: dataTypes.STRING},
        perfilc: { type: dataTypes.STRING },

       
       
    }
    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    
    const Comentarios = sequelize.define('Comentario', cols, configs);
    Comentarios.associate = function (models) {
        Comentarios.belongsTo(models.Usuarios, {
            as:"user",
            foreignKey:"usuarioId"
        })
        Comentarios.belongsTo(models.zapas,
            {
                as: "objetos",
                foreignKey: "productoId"
            })
    }


    return Comentarios;
}
  