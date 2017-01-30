'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      // getAllData: function(cb) {
      //   Users.findAll().then(function(data){
      //     let temp = [];
      //     data.forEach(function(item){
      //       temp.push({
      //         id: `${item.id}.`,
      //         todo: item.getBracket()
      //       })
      //     })
      //     cb(temp)
      //   })
      // },
    }
  });
  return Users;
};
