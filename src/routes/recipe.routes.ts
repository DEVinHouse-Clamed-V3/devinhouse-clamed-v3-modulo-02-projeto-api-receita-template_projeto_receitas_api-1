import { Router } from "express";
import RecipeController from "../controllers/RecipeController";

const recipeRouter = Router();

recipeRouter.post('/', RecipeController.createRecipe )
recipeRouter.get('/', RecipeController.getRecipes )


export default recipeRouter;
