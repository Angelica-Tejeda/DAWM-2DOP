module.exports = (sequelize, DataTypes) => {
    const Galeria = sequelize.define("correos", {
      nombre: {
        type: DataTypes.STRING
      },
      correo: {
        type: DataTypes.STRING
      },
      telefono: {
        type: DataTypes.STRING
      },
      ciudad: {
        type: DataTypes.STRING
      },
      fechaNac: {
        type: DataTypes.STRING
      },
      mensaje: {
        type: DataTypes.STRING
      }
    });
  
    return Galeria; 
  };