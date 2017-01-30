var express = require('express');
var router = express.Router();
var userctrl = require('../controllers/userController')

/* GET home page. */
router.get('/users');

router.get('/users/:id');

router.post('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/users/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/users/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
