import {  DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class User extends Model {}

User.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      fullname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false  },
      password: { type: DataTypes.STRING, allowNull: false  },
    }, 
    {
      sequelize,         // We need to pass the connection instance
      modelName: 'User',  // We need to choose the model name
      timestamps: true,
      underscored: true     
  }
);

export default  User