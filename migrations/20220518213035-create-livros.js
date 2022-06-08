'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       
      
      autorId: {
        type: Sequelize.INTEGER,
        references:{
       model: "autores",
       key:"id"
        }
      },
      titulo: {
        type: Sequelize.STRING
      },
      editora: {
        type: Sequelize.STRING
      },
      data_publi: {
        type: Sequelize.DATE
      },
      preco: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('livros');
  }
};