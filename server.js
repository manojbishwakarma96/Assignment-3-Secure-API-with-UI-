/**
 * File: server.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Recipe API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
