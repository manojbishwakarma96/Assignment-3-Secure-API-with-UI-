/**
 * File: server.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/recipes_db"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
