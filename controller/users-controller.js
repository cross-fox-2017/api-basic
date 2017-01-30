const models = require('../models');
var user = models.User;

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
    console.log(req.body);
      user.create({username: req.body.username, password: req.body.password, createdAt: new Date(), updatedAt: new Date()}).then(function(data){
        res.send({users: data})
      })
  }, deleteUser : function(req,res){
      user.findById(req.params.id).then(function(data){
        use.destroy()
        res.send({users:data})
      })
  }, updateUser : function(req,res){
      user.findById(req.body.id).then(function(data){
        use.update({username:req.body.username,password:req.body.password,updatedAt: new Date()})
        res.send({users: data})
      })
  }
}
