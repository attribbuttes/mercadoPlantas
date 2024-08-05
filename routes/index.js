var express = require('express');
var router = express.Router();

const plantasController = require('../controllers/plantas')

/* GET home page. */
router.get('/', plantasController.plantasmenu);

router.get('/:id/', plantasController.detail);

module.exports = router;
