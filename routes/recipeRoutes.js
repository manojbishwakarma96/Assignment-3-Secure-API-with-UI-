/**
 * File: recipeRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * StudentID: 200544391, 200544400
 * Date: March 20, 2024
 */

const express = require("express");
const router = express.Router();
const { getAllRecipes } = require("../controllers/recipeController");

/**
 * @route GET /api/recipes/getAllRecipes
 * @description Get all recipes
 */
router.get("/getAllRecipes", getAllRecipes);

module.exports = router;
