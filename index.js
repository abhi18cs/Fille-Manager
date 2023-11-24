// index.js
const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const folderRoutes = require("./src/routes/folderRoutes");
const fileRoutes = require("./src/routes/fileRoutes");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool();

// Set up routes
app.use("/users", userRoutes);
app.use("/folders", folderRoutes);
app.use("/files", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
