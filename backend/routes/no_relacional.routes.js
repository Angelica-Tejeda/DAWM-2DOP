var express = require('express');
var router = express.Router();

const controller = require("../controllers/no_relacional.controller.js");

router.get('/', controller.findAll);

router.get('/:name', controller.findByName);

router.post('/', controller.save);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;