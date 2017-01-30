const models = require('../../models');
var user = models.User;

function getAllUsers(req, res) {
  user.findAll().then(function(result){
    res.render('index', {result: result, title: "User List"})
  })
}

function getSingleUser(req,res){
  user.findById(req.params.id).then(function(use){
    res.render('index', {result: result})
    })
}

function createUser(req, res) {
  user.create({username: req.body.username, password: req.body.password, createdAt: new Date(), updatedAt: new Date()}).then(function(result){
    res.redirect('/')
  })
}

function deleteUser(req,res){
  user.findById(req.params.id).then(function(use){
    use.destroy()
    res.redirect('/')
    })
}

function updateUser(req,res){
  user.findById(req.body.id).then(function(use){
    use.update({username:req.body.username,password:req.body.password,updatedAt: new Date()})
    res.redirect('/')
    })
}
