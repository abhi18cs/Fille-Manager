// fileModel.js
const { Pool } = require("pg");

const pool = new Pool();

const createFile = async (name, size, userId, folderId, s3Url) => {
  const query =
    "INSERT INTO files(name, size, user_id, folder_id, s3_url) VALUES($1, $2, $3, $4, $5) RETURNING *";
  const values = [name, size, userId, folderId, s3Url];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { createFile };
