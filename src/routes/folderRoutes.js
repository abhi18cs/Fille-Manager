// folderRoutes.js
const express = require("express");
const folderController = require("../controllers/folderController");

const router = express.Router();

router.post("/create", folderController.createFolder);

module.exports = router;
