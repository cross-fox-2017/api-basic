var users = {
  /* get all users */
  getAllUser : function(req, res, next) {
    res.send('respond with a resource');
  },
  /* get a single user */
  getOneUser : function(req, res, next){
    res.send('hallo world');
  },
  /* create user */
  createOneUser : function(req, res, next){
    res.send('hallo world');
  },
  /* delete one user */
  deleteOneUser : function(req, res, next){
    res.send('hallo world');
  },
  /* edit one user */
  editOneUser : function(req, res, next){
    res.send('hallo world');
  }
}

module.exports = users
