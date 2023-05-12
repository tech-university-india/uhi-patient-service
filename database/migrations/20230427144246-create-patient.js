/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      abhaId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      yearOfBirth: {
        type: Sequelize.INTEGER,
      },
      monthOfBirth: {
        type: Sequelize.INTEGER,
      },
      dayOfBirth: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.JSON,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      healthNumber: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  },
};
