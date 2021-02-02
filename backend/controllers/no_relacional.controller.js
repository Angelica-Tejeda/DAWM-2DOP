const dataController = require("../collections/model");

exports.findAll = (req, res) => {
    dataController.find((err, data) => {
        res.send(data);
    })
};

exports.findByName = (req, res) => {
    dataController.find({"platillo": req.params.name}, (err, data) => {
        res.send(data);
    })
};

exports.save = (req, res) => {
    var nuevaData = new dataController();

    nuevaData.platillo = req.body.platillo;
    nuevaData.precio = req.body.precio;
    nuevaData.fecha = req.body.fecha;

    nuevaData.save((err, saved) => {
        if(err) return res.status(500).send({message: 'Error en el servidor'});

        if(saved){
            return res.status(200).send({message: 'El Historial se ha guardado con exito'})
        } else {
            return res.status(200).send({message: 'El historial no se ha podido guardar'})
        }
    })
};

exports.update = (req, res) => {
    var id = req.params.id;
    var nuevosDatos = req.body

    dataController.updateOne( {_id: id}, nuevosDatos, (err, actualized) => {
        if(err) return res.status(500).send({message: err});

        if(actualized) {
            return res.status(200).send({message: 'El historial se ha actualizado con exito'})
        } else {
            return res.status(200).send({message: 'El historial no se ha podido actualizar'});
        }
    });
}

exports.delete = (req, res) => {
    dataController.findByIdAndRemove(req.params.id, (err, delected) => {
        if(err) return res.status(500).send({message: 'Error en el servidor'});

        if(delected) {
            return res.status(200).send({message: 'El historial ha sido eliminado'});
        } else {
            return res.status(200).send({message: 'el historial no pudo ser eliminado'});
        }
    });
}