module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menus", {
      nombre: {
        type: DataTypes.STRING
      },
      ingredientes: {
        type: DataTypes.STRING
      }
    });
  
    return Menu;
};