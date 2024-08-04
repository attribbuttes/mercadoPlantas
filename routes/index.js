var express = require('express');
var router = express.Router();

const plantasController = require('../controllers/plantas')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id/', plantasController.detail);

module.exports = router;
