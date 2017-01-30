'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      listUser: function(){
        user.findAll().then(function(data){
          let result = []
          data.forEach(function(datas){
            result.push(datas.dataValues)
          })
          return result
        })
      }
    }
  });
  return user;
};
