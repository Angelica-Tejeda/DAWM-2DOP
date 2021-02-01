var express = require('express');
var router = express.Router();

const maestroController = require("../controllers/relacional.controller.js");

router.get('/', maestroController.findAll);

module.exports = router;
