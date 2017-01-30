const models = require('../models');
var passwordHash = require('password-hash');

module.exports = {
  createUser: function(req, res, next) {
    models.Users.create({
      username: req.body.username,
      password: req.body.password
    }).then((data) => {
      res.send(data)
    })
  },
  getUser: function(req, res, next) {
    models.Users.findById(req.params.id).then(function (data) {
      res.send({users: data})
    })
  },
  getUsers: function(req, res, next) {
    models.Users.findAll().then(function(data){
      res.send({users: data})
    })
  },
  deleteUser: function(req, res, next) {
    models.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.send({message: `User with id ${req.params.id} has been deleted`})
    })
  },
  updateUser: function(req, res, next) {
    models.Users.findById(req.params.id).then(function (data) {
      data.update({
        username: req.body.username,
        password: req.body.password
      })
    }).then((data) => {
      res.send({message: `User with id ${req.params.id} has been updated`})
    })
  }
};
