
import { ARRAY } from 'sequelize';
import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
//const { DataTypes} = require('sequelize');
export = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable('savingplans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      numberOfBuddies: {
        type: DataTypes.INTEGER
      },
      savingFrequency: {
        type: DataTypes.STRING
      },
      specifyTarget: {
        type: DataTypes.STRING
      },
      yearlyTarget: {
        type:DataTypes.INTEGER
      },
      savingmethod: {
        type: DataTypes.STRING
      },
      relationshipWithBuddies: {
        type: DataTypes.STRING
      },
      invitedBuddies: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      startDate: {
        type: DataTypes.DATE
      },
      enddate: {
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type:DataTypes.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('savingplans');
  }
};