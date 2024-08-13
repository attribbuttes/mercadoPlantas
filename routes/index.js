var express = require('express');
var router = express.Router();

const plantasController = require('../controllers/plantas')

/* GET home page. */
router.get('/', plantasController.plantasmenu);

router.get('/plagas', plantasController.plagas);
router.get('/:id/', plantasController.detail);



router.get('/plagas/:id/', plantasController.plagasDetail);



module.exports = router;
