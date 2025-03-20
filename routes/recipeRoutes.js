/**
 * File: recipeRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
} = require("../controllers/recipeController");

/**
 * @route GET /api/recipes
 * @description Get all recipes
 */
router.get("/", getAllRecipes);

/**
 * @route GET /api/recipes/:id
 * @description Get a single recipe by ID
 */
router.get("/:id", getRecipeById);

module.exports = router;
