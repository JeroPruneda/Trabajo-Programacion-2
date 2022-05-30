module.exports = function (sequelize, dataTypes) {
    const alias = "zapas"
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
        tableName: 'productos',
        timestamps: false
    }
    const Zapatilla = sequelize.define('zapas', cols, configs);
    return Zapatilla;
}