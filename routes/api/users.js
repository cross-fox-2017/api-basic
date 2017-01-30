var express = require('express');
var router = express.Router();
const controller = require('../../controller/users-controller.js');

router.get('/api/users', getAllUsers(req,res));

router.get('api/users/:id', getSingleUser(req,res));

router.post('/api/users', createUser(req,res));

router.delete('api/users/:id', deleteUser(req,res));

router.put('api/users/:id', updateUser(req,res));

module.exports = router;
