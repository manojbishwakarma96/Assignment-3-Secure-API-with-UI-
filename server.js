/**
 * File: server.js
 * Student's Name: Manoj Bishwakarma
 * StudentID: 200544391
 * Date: March 20, 2024
 */

const express = require("express");
const app = express();

// Basic middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Recipe API" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
