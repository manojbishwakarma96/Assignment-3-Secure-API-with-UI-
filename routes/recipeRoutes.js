/**
 * File: recipeRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipeModel");

/**
 * @route GET /api/recipes
 * @description Get all recipes
 * @returns {Array} Array of recipes
 */
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
