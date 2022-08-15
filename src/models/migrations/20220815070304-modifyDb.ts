import { QueryInterface,  DataTypes } from 'sequelize';

export = {
  async up (queryInterface: QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn(
        'savingplans', // table name
        'creator', // new field name
        {
          type: DataTypes.STRING,
          allowNull: true,
        },
      ),])
  },

  async down (queryInterface: QueryInterface) {
    // return Promise.all([
    //   queryInterface.removeColumn('Users', 'linkedin'),
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
