// folderController.js
const folderModel = require("../models/folderModel");

const createFolder = async (req, res) => {
  const { name, userId, parentFolderId } = req.body;

  try {
    const folder = await folderModel.createFolder(name, userId, parentFolderId);
    res.json({ success: true, folder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createFolder };
