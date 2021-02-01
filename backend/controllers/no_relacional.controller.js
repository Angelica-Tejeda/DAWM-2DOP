const dataController = require("../collections/model"); 

exports.findAllView = (req, res) => {
    dataController.find((err, data) => {
        res.render('index', {titulo: 'ProyectoFinal', datos: data});
    })
};