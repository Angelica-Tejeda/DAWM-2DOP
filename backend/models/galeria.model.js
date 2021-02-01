module.exports = (sequelize, DataTypes) => {
  const Galeria = sequelize.define("galerias", {
    descripcion: {
      type: DataTypes.STRING
    }
  });

  return Galeria; 
};