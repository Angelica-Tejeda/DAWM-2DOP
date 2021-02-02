const db = require("../models");
const Menu    = db.menu;
const Correo  = db.correo;
const Imagen  = db.imagen;
const Galeria = db.galeria;
const Op = db.Sequelize.Op;

//----------------------------------------------------------Seccion Galeria----------------------------------------------------------
exports.saveGaleria = (req, res) => {
  const galeria = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };

  Galeria.create(galeria)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: err});
  });
};

exports.findAllGaleria = (req, res) => {
  Galeria.findAll({include: ["imagenes"]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.updateGaleria = (req, res) => {
  const id = req.params.id;

  Galeria.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "La Galeria fue actualizada correctamente."});
      } else {
        res.send({message: "La Galeria no pudo ser actualizada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.deleteGaleria = (req, res) => {
  const id = req.params.id;

  Galeria.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "La Galeria fue eliminada exitosamente"});
      } else {
        res.send({message:"La Galeria no pudo ser eliminada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

//----------------------------------------------------------Seccion Menu----------------------------------------------------------
exports.saveMenu = (req, res) => {
  const menu = {
    nombre:       req.body.nombre,
    ingredientes: req.body.ingredientes
  };

  Menu.create(menu)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: err});
  });
};

exports.findAllMenu = (req, res) => {
  Menu.findAll({include: ["imagenes"]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.updateMenu = (req, res) => {
  const id = req.params.id;

  Menu.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "El Menu fue actualizada correctamente."});
      } else {
        res.send({message: "El Menu no pudo ser actualizada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.deleteMenu = (req, res) => {
  const id = req.params.id;

  Menu.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "El Menu fue eliminada exitosamente"});
      } else {
        res.send({message:"El Menu no pudo ser eliminada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

//----------------------------------------------------------Seccion Correo----------------------------------------------------------
exports.saveCorreo = (req, res) => {
  const correo = {
    nombre:   req.body.nombre,
    correo:   req.body.correo,
    telefono: req.body.telefono,
    ciudad:   req.body.ciudad,
    fechaNac: req.body.fechaNac,
    mensaje:  req.body.mensaje
  };

  Correo.create(correo)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: err});
  });
};

exports.findAllCorreo = (req, res) => {
  Correo.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.updateCorreo = (req, res) => {
  const id = req.params.id;

  Correo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "El Correo fue actualizado correctamente."});
      } else {
        res.send({message: "El Correo no pudo ser actualizado"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.deleteCorreo = (req, res) => {
  const id = req.params.id;

  Correo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "El Correo fue eliminado exitosamente"});
      } else {
        res.send({message:"El Correo no pudo ser eliminado "});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

//----------------------------------------------------------Seccion Imagenes----------------------------------------------------------
exports.saveImagen =(req, res) => {
  const imagen = {
    alt:       req.body.alt,
    imgSRC:    req.body.imgSRC,
    galeriaId: req.body.galeriaId,
    menuId:    req.body.menuId
  };

  Imagen.create(imagen)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: err});
  });
};

exports.findAllImagen = (req, res) => {
  Imagen.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.updateImagen = (req, res) => {
  const id = req.params.id;

  Imagen.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "La imagen fue actualizada correctamente."});
      } else {
        res.send({message: "La imagen no pudo ser actualizada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};

exports.deleteImagen = (req, res) => {
  const id = req.params.id;

  Imagen.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "La Imagen fue eliminada exitosamente"});
      } else {
        res.send({message:"La Imagen no pudo ser eliminada"});
      }
    })
    .catch(err => {
      res.status(500).send({message: err});
    });
};