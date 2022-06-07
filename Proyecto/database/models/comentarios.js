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
        descripicion: { type: dataTypes.STRING }
    }
    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    const Zapatilla = sequelize.define('Comentario', cols, configs);
    return Zapatilla;

    Zapatilla.associate = function(models){
        Zapatilla.belongsTo(models,User, {
            as:'author',
            foreignKey :'user_id'
        });
        Zapatilla.hasMany(models.Comentarios), {
            as:'comentarios'
        }
    }
}