

import  {Model, DataTypes, Sequelize, Optional} from 'sequelize';
import {CreateUserInterace} from '../interfaces/UserInterfaces'
import constants  from "../config/constants";
const { DB_CONFIGURATION , NODE_ENV} = constants

const { database, username, password } = DB_CONFIGURATION;
const sequelize = new Sequelize(database, username, password, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    multipleStatements: true,
  },
});


interface UserCreationAttributes
  extends Optional<CreateUserInterace, 'id'> {}

interface UserInstance
  extends Model<CreateUserInterace, UserCreationAttributes>,
  UserCreationAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }
     const User = sequelize.define< UserInstance>( 'Users', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {

  });


  export default User;
