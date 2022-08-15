const { Sequelize, DataTypes} = require('sequelize');


  const SavingPlanAttributes = 
  {
    title: {
      type: DataTypes.STRING,
    },
    numberOfBuddies: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savingFrequency: {
      type: Sequelize.ENUM("Daily", "Weekly", "Monthly"),
      allowNull: false,
    },
    specifyTarget: {
        type: Sequelize.ENUM("Yes", "No"),
    },

    yearlyTarget: {
        type: DataTypes.INTEGER,
    },
    savingmethod: {
        type: Sequelize.ENUM("Automatic", "Manual"),
    },
    relationshipWithBuddies: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    startDate: {
        type: Sequelize.DATE,
        defaultValue: false,
    },
    enddate: {
        type: Sequelize.DATE,
        defaultValue: false,
    },
  };
  
export default SavingPlanAttributes
