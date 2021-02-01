const db = require("../models");
const galeria = db.galeria;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  galeria.findAll()
  .then(data => {
      res.send(data);
  })
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};