
const { Sequelize, DataTypes} = require('sequelize');


  const InvitationAttributes = 
  {
    email: {
      type: DataTypes.STRING,
    },
    inviter:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savingPlan : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accepted: {
      type: DataTypes.STRING,
    },
  };
  
export default InvitationAttributes
