module.exports = (sequelize, DataTypes) => {
  const Galeria = sequelize.define("galerias", {
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    }
  });

  return Galeria; 
};