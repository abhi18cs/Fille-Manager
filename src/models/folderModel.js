// folderModel.js
const { Pool } = require("pg");

const pool = new Pool();

const createFolder = async (name, userId, parentFolderId = null) => {
  const query =
    "INSERT INTO folders(name, user_id, parent_folder_id) VALUES($1, $2, $3) RETURNING *";
  const values = [name, userId, parentFolderId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { createFolder };
