import { Router } from 'express';
import RecipeController from '../controllers/RecipeController';

const recipeController = new RecipeController();
const recipeRouter = Router();

recipeRouter.post('/', recipeController.create);
recipeRouter.get('/', recipeController.getAll);

export default recipeRouter;
