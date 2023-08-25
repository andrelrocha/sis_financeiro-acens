'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING, 
      unique: true,
      validate: {
          isEmail: {
              msg: "Invalid email"
          }
      }
    },
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
    scopes: {
      all: { where: {} }
    },
    paranoid: true,
  });
  return Users;
};