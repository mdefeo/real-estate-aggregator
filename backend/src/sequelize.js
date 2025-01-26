require('dotenv').config();

const { Sequelize } = require('sequelize');

// Use environment variables from the .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',  // Assuming local Postgres, replace with your host for Docker
    dialect: 'postgres',
  }
);

module.exports = sequelize;
