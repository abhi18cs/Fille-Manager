// userModel.js
const { Pool } = require("pg");

const pool = new Pool();

const createUser = async (username, email, password) => {
  const query =
    "INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *";
  const values = [username, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getUserByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = $1";
  const values = [username];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { createUser, getUserByUsername };
