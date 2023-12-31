const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID:{
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgFlag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
    
    },
    subregion: {
      type: DataTypes.STRING,
     
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false} );
};