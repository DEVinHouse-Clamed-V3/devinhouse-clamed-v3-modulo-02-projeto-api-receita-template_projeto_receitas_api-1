import { Router } from "express";
import RecipeController from "../controllers/RecipeController";

const recipeController = new RecipeController();
const recipeRouter = Router();

recipeRouter.post("/", recipeController.create);

export default recipeRouter;
