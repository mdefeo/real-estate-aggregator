// Load environment variables dynamically based on NODE_ENV (default to 'development')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// Export the configuration using environment variables
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};
