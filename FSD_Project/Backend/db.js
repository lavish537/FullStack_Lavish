const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",      // change if needed
  password: "Lavish227",      // your MySQL password
  database: "job_portal"
});

module.exports = db;
