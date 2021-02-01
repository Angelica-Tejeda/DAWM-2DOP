module.exports = (sequelize, DataTypes) => {
  const Imagen = sequelize.define("imagenes", {
    alt: {
      type: DataTypes.STRING
    },
    imgSRC: {
      type: DataTypes.STRING
    }
  });

  return Imagen;
};