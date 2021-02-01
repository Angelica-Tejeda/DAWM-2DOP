var express = require('express');
var router = express.Router();

const controller = require("../controllers/no_relacional.controller.js");

router.get('/', controller.findAllView);

module.exports = router;