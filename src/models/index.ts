
import  { Sequelize } from "sequelize";
import constants  from "../config/constants";
import SavingPlanModel from "./savingPlanModel";

const { DB_CONFIGURATION , NODE_ENV} = constants

const createModels = (env:string) => {
  let sequelize: any;
  if (NODE_ENV == "development") {
    const { database, username, password } = DB_CONFIGURATION;
    sequelize = new Sequelize(database, username, password, {
      dialect: "postgres",
      logging: false,
      dialectOptions: {
        multipleStatements: true,
      },
    });
  } else if (NODE_ENV == "production") {
    const connection_uri = String(process.env.DATABASE_URL);
    sequelize = new Sequelize(connection_uri, {
      dialect: "postgres",
      logging: false,
    });
  }
  console.log("Successfully connected to database");

  const db = {
    SavingPlanModel : sequelize.define('savingplans', SavingPlanModel)
  }
  //const savingplanModel = 
  return db
};

/**
 * Open connction to the DB
 */
const env = NODE_ENV || "development";
console.log(env);

const db: any = createModels(env);


export default db;


