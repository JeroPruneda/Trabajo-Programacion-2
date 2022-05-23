module.exports = function (sequelize, dataTypes) {
    const alias = "zapas"
    const cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        marca: { type: dataTypes.STRING },
        modelo : { type: dataTypes.STRING },
        fecha: { type: dataTypes.DATE },
        descripicion: { type: dataTypes.STRING }
    }
    const configs = {
        tableName: 'productos',
        timestamps: false
    }
    const Zapatilla = sequelize.define(alias, cols, configs);
    return Zapatilla;
}