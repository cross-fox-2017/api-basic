var express    = require('express');
var router     = express.Router();
var controller = require('../../controller/user-controller.js')


router.get('/', controller.getAllUser)

router.get('/:id', controller.getUser)

router.post('/', controller.createUser)





module.exports = router;
