'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //chave estrangeira
    static associate(models) {
      this.belongsTo(models.autores, {as: "autores"})
    }
  }
  livros.init({
    autorId: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    editora: DataTypes.STRING,
    data_publi: DataTypes.DATE,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'livros',
  });
  return livros;
};
