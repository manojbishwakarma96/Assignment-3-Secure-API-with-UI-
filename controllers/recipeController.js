/**
 * File: recipeController.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

const Recipe = require("../models/recipeModel");

/**
 * Get all recipes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Array} Array of recipes
 */
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // This will fetch all fields

    if (!recipes || recipes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No recipes found",
      });
    }

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching recipes",
      error: error.message,
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error creating recipe",
      error: error.message,
    });
  }
};

module.exports = { getAllRecipes, createRecipe };
