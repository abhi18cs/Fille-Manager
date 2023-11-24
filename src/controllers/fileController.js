// fileController.js
const fileModel = require("../models/fileModel");
const s3Utils = require("../utils/s3Utils");

const uploadFile = async (req, res) => {
  const { userId, folderId } = req.body;
  const file = req.file;

  try {
    const s3UploadResponse = await s3Utils.uploadFileToS3(file);
    const fileUrl = s3UploadResponse.Location;

    const uploadedFile = await fileModel.createFile(
      file.originalname,
      file.size,
      userId,
      folderId,
      fileUrl
    );
    res.json({ success: true, file: uploadedFile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { uploadFile };
