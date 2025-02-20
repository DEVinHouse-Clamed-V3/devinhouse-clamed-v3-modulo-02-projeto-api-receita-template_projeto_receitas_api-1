import { Router } from "express";
import RecipeController from "../controllers/RecipeController";

const recipeRouter = Router();

const recipeController = new RecipeController();

recipeRouter.post("/", recipeController.create);

export default recipeRouter;
