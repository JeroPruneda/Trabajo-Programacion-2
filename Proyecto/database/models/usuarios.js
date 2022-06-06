module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING },
        documento: { type: dataTypes.STRING },
        fecha_de_nacimiento: { type: dataTypes.DATE},
        contraseña: { type: dataTypes.STRING }
        
    }
    const configs = {
        tableName: 'usuarios',
        timestamps: false
    }
    
    const Zapatilla = sequelize.define('Usuarios', cols, configs);
    return Zapatilla;
}