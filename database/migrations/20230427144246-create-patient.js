'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      abhaid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      yearOfBirth: {
        type: Sequelize.NUMBER
      },
      monthOfBirth: {
        type: Sequelize.NUMBER
      },
      dayOfBirth: {
        type: Sequelize.NUMBER
      },
      address: {
        type: Sequelize.JSONB
      },
      mobile: {
        type: Sequelize.STRING
      },
      healthNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};