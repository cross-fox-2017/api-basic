var express = require('express');
var router = express.Router();
var users = require('controller.user.js');

/* GET users listing. */
router.get('/', users.getAllUser);

router.get('/', users.getOneUser);

router.get('/', users.getAllUser);

router.get('/', users.getOneUser);

router.get('/', users.getAllUser);



module.exports = router;
