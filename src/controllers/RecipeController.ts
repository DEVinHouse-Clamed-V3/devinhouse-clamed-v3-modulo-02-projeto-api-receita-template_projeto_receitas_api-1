import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../utils/AppError";
import { Recipe } from "../entities/Recipe";
import { RecipeIngredient } from "../entities/RecipeIngredients";
import { RecipeStep } from "../entities/RecipeSteps";

class RecipeController {
  private recipeRepository;
  private recipeIngredientRepository;
  private recipeStepRepository;

  constructor() {
    this.recipeRepository = AppDataSource.getRepository(Recipe);
    this.recipeIngredientRepository = AppDataSource.getRepository(RecipeIngredient);
    this.recipeStepRepository = AppDataSource.getRepository(RecipeStep);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;

      //validar nome e tempo de preparo
      if (!body.name || !body.preparation_time) {
        throw new AppError("Nome e tempo de preparo são obrigatórios", 400);
      }

      const recipe = await this.recipeRepository.save(body);

      const ingredients = body.ingredients.map((ingredient: { name: string }) => ({
        ...ingredient,
        recipe: recipe,
      }));

      const steps = body.steps.map((step: { description: string }) => ({
        ...step,
        recipe: recipe,
      }));

      await this.recipeIngredientRepository.save(ingredients);
      await this.recipeStepRepository.save(steps);

      res.status(201).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipes = await this.recipeRepository.find({
        relations: ["ingredients", "steps"],
      });
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  };
}

export default RecipeController;
