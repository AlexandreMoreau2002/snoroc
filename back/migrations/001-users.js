'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },

      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      userPhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      civility: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Not Specified",
      },
      password: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },

      newsletter: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      accessToken: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },

      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      emailVerificationToken: {
        type: Sequelize.STRING,
        allowNull: true
      },

      emailVerificationTokenExpires: {
        type: Sequelize.DATE,
        allowNull: true
      },

      isRestricted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      passwordResetTokenExpires: {
        type: Sequelize.DATE,
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  async down(queryInterface, Sequelize) {
  }
};



