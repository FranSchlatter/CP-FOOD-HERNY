const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "Name-Des",
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("Recipe name cannot be a number")
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "Name-Des",
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("Recipe description cannot be a number")
        }
      }
    },
    health_score: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1.0,
        max: 100.0
      }
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    steps:{
      type: DataTypes.TEXT,
      defaultValue: 'This recipe does not have a step by step',
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("The recipe step by step cannot be a number")
        }
      }
    }
  });
};