import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// Load environment variables from the .env file
dotenv.config();
// Ensure DATABASE_URL is set, otherwise throw an error
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in the environment variables');
}
// Now pass the DATABASE_URL to Sequelize
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});
export default sequelize;
