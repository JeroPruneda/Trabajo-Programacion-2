module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        marca: { type: dataTypes.STRING },
        modelo : { type: dataTypes.STRING },
        fecha: { type: dataTypes.DATE },
        descripicion: { type: dataTypes.STRING }
    }
    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    const Zapatilla = sequelize.define('Comentario', cols, configs);
    return Zapatilla;
}