
import { QueryInterface, DataTypes } from 'sequelize';
export = { 
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fullName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes .STRING
      },
      username: {
        type: DataTypes .STRING
      },
      password: {
        type: DataTypes .STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes .DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes .DATE
      }
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('users');
  }
};