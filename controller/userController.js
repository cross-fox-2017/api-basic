'use strict'

const models = require('../models')
let user = models.user

let userController = {
  listUser: function(req, res){
    user.findAll().then(function(data){
      let result = []
      data.forEach(function(datas){
        result.push(datas.dataValues)
      })
      res.json(result)
    })
  },
  createUser: function(req, res){
    let name = req.body.name
    let email = req.body.email
    let address = req.body.address
    user.create({name: name, email: email, address: address}).then(function(data){
      res.json(data)
    })
  },
  getUser: function (req, res) {
    let id = req.params.id
    user.findById(id).then(function(user){
      res.json(user)
    })
  },
  deleteUser: function (req, res) {
    let id = req.params.id
    user.destroy({where: {id: id}}).then(function(user){
      res.json(user)
    })
  },
  updateUser: function (req, res) {
    let id = req.params.id
    let name = req.body.name
    let email = req.body.email
    let address = req.body.address
    user.findById(id).then(function(user){
      user.update({
        name: name,
        email: email,
        address: address
      }).then(function(user){
        res.json(user)
      })
    })
  }
}

module.exports = userController
