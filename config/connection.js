// Setup to connect to MySQL

// Dependencies //
const Sequelize = require("sequelize");

// Set up and configure //
const sequelize = new Sequelize("employee-survey", "root", "easyPass", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
