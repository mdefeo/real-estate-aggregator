export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PROD_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432
  }
};
