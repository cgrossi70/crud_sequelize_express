import { Sequelize, Datattupes } from "sequelize";
import dotenv from 'dotenv'


dotenv.config()

const user = process.env.DB_USER
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const sequelize = new Sequelize(`mysql://${user}:${password}@${host}:3306/${database}`,{
  logging: true
})

/*
async function connect (){ 
  try {
    await sequelize.authenticate();
 
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect()
*/
export default sequelize