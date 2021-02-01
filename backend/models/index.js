const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.galeria = require("./galeria.model.js")(sequelize, Sequelize);
db.imagen = require("./imagen.model.js")(sequelize, Sequelize);
db.menu = require("./menu.model.js")(sequelize, Sequelize);

db.galeria.hasMany(db.imagen, { as: "imagenes" });
db.imagen.belongsTo(db.galeria, {
  foreignKey: "galeriaId",
  as: "galerias"
});

db.menu.hasMany(db.imagen, { as: "imagenes" });
db.imagen.belongsTo(db.menu, {
  foreignKey: "menuId",
  as: "menus",
});

module.exports = db;