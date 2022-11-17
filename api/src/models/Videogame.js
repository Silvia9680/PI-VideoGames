const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    released:{
      type: DataTypes.STRING,
      allowNull: true,

    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull: false,

    },
    image: {
      type: DataTypes.STRING,
      // allowNull: false
    },

    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
    
  },
  { timestamps: false })
};
