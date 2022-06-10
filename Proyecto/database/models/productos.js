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
        descripcion: { type: dataTypes.STRING },
        imagenes : {type: dataTypes.STRING },
    }
    const configs = {
        tableName: 'productos',
        timestamps: false
    }
    const Productos = sequelize.define('zapas', cols, configs);
    return Productos;
}