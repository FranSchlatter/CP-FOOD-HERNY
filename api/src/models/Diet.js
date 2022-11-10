const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("Diet name cannot be a number")
        }
      }
    }
  }, 
  { timestamps: false });
};