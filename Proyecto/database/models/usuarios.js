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
        contrasenia: { type: dataTypes.STRING },
        perfil: { type: dataTypes.STRING },
<<<<<<< HEAD
    
        // /* created_at : {
        //     type: dataTypes.DATE,
        //     allowNull:true,
        // },
        // updated_at: {
        //     type: dataTypes.DATE,
        //     allowNull: true,
        // }
        //  */
=======
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        } 
         
>>>>>>> 4e47d1f0e66043f520c070db987510952d56839f
        
    }
    const configs = {
        tableName: 'usuarios',
        timestamps: false
    }
    
    const Usuario = sequelize.define('Usuarios', cols, configs);
   
     Usuario.associate = function(models){
        Usuario.hasMany(models.zapas, {
          as:'objetos',
          foreignKey :'usuarioId'
     }); 
 } 
    return Usuario;
}