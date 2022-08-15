import { QueryInterface, DataTypes} from 'sequelize';

export = {
  async up(queryInterface: QueryInterface,) {
    await queryInterface.createTable('invitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING
      },
      inviter: {
        type: DataTypes.NUMBER
      },
      accepted: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('invitations');
  }
};