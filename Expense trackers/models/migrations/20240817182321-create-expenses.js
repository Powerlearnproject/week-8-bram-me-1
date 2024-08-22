'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('expenses', {
      Expense_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Category_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      Date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('expenses');
  }
};
