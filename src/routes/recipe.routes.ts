import { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Recipe } from "../entities/recipes";
import RecipeController from "../controllers/RecipeController";

const recipeRouter = Router();

const recipeController = new RecipeController();

recipeRouter.post("/", recipeController.create);

export default recipeRouter;
