var express = require('express');
var router = express.Router();

var controller = require('../controller/controller')

router.get('/api/users',controller.displayAll);
router.get('/api/users/:id',controller.displayOne);
router.post('/api/users',controller.create);
router.delete('/api/users/:id',controller.delete);
router.put('/api/users/:id',controller.updateUser);

module.exports = router;
