// s3Utils.js
const AWS = require("aws-sdk");
const {
  accessKeyId,
  secretAccessKey,
  region,
  bucketName,
} = require("../config/awsConfig");

AWS.config.update({ accessKeyId, secretAccessKey, region });

const s3 = new AWS.S3();

const uploadFileToS3 = async (file) => {
  const params = {
    Bucket: bucketName,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const uploadResult = await s3.upload(params).promise();
    console.log(`File uploaded successfully to ${uploadResult.Location}`);
    return uploadResult.Location;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};

module.exports = { uploadFileToS3 };
