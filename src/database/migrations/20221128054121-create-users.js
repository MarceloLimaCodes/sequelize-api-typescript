'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNUll: false
      },
      
      nome: {
        type: Sequelize.STRING,
        allowNUll: false
      },

      email: {
        type: Sequelize.STRING,
        allowNUll: false
      },

      password: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNUll: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNUll: false
      }
      
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    
  }
};
