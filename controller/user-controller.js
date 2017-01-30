let model      = require ('../models')
let user       = model.User;

module.exports = {

    // Get all users
    getAllUser : function(req, res) {
      user.findAll().then(function (data) {
        res.send({user: data})
      })
    },

    // GET single user
    getUser : function(req, res) {
      user.findById(req.params.id).then(function (data) {
        res.send({user: data})
      })
    },

    // CREATE user
    createUser : function(req,res,next){
      user.create({username: req.body.username, password: req.body.password, createdAt: new Date(), updatedAt: new Date()})
      .then(function(data){
        res.send(data)
      })
    }


}
