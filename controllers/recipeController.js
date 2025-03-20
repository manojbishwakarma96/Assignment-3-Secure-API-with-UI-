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
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get a single recipe by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} Recipe object
 */
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
};
