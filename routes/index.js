var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'HOLA ESTE ES UN MENSAJE PARA DOCKER' });
});

module.exports = router;
