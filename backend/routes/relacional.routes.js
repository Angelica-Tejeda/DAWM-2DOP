var express = require('express');
var router = express.Router();

const controller = require("../controllers/relacional.controller.js");

router.post('/galeria', controller.saveGaleria);
router.get('/galeria', controller.findAllGaleria);
router.get('/galeria/:id', controller.findByIDGaleria);
router.put('/galeria/:id', controller.updateGaleria);
router.delete('/galeria/:id', controller.deleteGaleria);

router.post('/menu', controller.saveMenu);
router.get('/menu', controller.findAllMenu);
router.get('/menu/:id', controller.findByIDMenu);
router.put('/menu/:id', controller.updateMenu);
router.delete('/menu/:id', controller.deleteMenu);

router.post('/correo', controller.saveCorreo);
router.get('/correo', controller.findAllCorreo);
router.get('/correo/:id', controller.findByIDCorreo);
router.put('/correo/:id', controller.updateCorreo);
router.delete('/correo/:id', controller.deleteCorreo);

router.post('/imagen', controller.saveImagen);
router.get('/imagen', controller.findAllImagen);
router.get('/imagen/:id', controller.findByIDImagen);
router.put('/imagen/:id', controller.updateImagen);
router.delete('/imagen/:id', controller.deleteImagen);

router.post('/admin', controller.saveAdmin);
router.get('/admin', controller.findAllAdmin);
router.put('/admin/:id', controller.updateAdmin);
router.delete('/admin/:id', controller.deleteAdmin);

router.post('/ingresar', (req, res) => {
    res.cookie('user', req.body.user, {maxAge: 1000 * 60 * 15})
    res.cookie('password', req.body.password,{maxAge: 1000 * 60 * 15})
 });

module.exports = router;
