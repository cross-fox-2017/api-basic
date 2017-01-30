var express = require('express');
var router = express.Router();
const models = require('../../models');
var user = models.User;

router.get('/api/users', function(req, res) {
  user.findAll().then(function(result){
    res.render('index', {result: result, title: "User List"})
  })
});

router.get('api/users/:id',function(req,res){
  user.findById(req.params.id).then(function(use){
    res.render('index', {result: result})
    })
});

router.post('/api/users', function(req, res) {
  user.create({username: req.body.username, password: req.body.password, createdAt: new Date(), updatedAt: new Date()}).then(function(result){
    res.redirect('/')
  })
});

router.delete('api/users/:id',function(req,res){
  user.findById(req.params.id).then(function(use){
    use.destroy()
    res.redirect('/')
    })
});

router.put('api/users/:id',function(req,res){
  user.findById(req.body.id).then(function(use){
    use.update({username:req.body.username,password:req.body.password,updatedAt: new Date()})
    res.redirect('/')
    })
});

module.exports = router;
