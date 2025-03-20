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

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
