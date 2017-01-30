const models = require('../models');
var user = models.User;
const hash = require('password-hash');

module.exports = {
    getAllUsers : function(req, res) {
      user.findAll().then(function(data){
        res.send({users: data})
      })
  }, getSingleUser : function(req,res){
      user.findById(req.params.id).then(function(data){
        res.send({users: data})
      })
  }, createUser : function(req, res) {
      user.create({username: req.body.username, password: hash.generate(req.body.password), createdAt: new Date(), updatedAt: new Date()}).then(function(data){
        res.send({users: data})
      })
  }, deleteUser : function(req,res){
      user.findById(req.params.id).then(function(data){
        data.destroy()
        res.send({users:data})
      })
  }, updateUser : function(req,res){
      user.findById(req.params.id).then(function(data){
        console.log(data);
        data.update({username:req.body.username,password:hash.generate(req.body.password),updatedAt: new Date()})
        res.send({users: data})
      })
  }, signup : function (req,res) {
      user.create({username: req.body.username, password: hash.generate(req.body.password), createdAt: new Date(), updatedAt: new Date()}).then(function(data){
        res.send({users: data})
      })
  }
}
