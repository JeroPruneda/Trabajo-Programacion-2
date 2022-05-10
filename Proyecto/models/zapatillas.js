module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: { type: dataTypes.STRING },
        author: { type: dataTypes.STRING },
        year_written: { type: dataTypes.INTEGER }
    }
    const configs = {
        tableName: 'zapatilla',
        timestamps: false
    }
    const Zapatilla = sequelize.define('Book', cols, configs);
    return Zapatilla;
}