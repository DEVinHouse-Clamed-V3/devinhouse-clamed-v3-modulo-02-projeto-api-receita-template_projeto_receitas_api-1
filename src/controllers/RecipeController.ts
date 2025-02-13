import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Recipes } from "../entities/recipes";
import AppError from "../utils/AppError";

class RecipeController {
    private recipeRepository;

    constructor() {
      this.recipeRepository = AppDataSource.getRepository(Recipes);
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, preparation_time, is_fitness } = req.body;

            if (!name) {
                throw new AppError("O campo nome é obrigatorio", 400);
            } 
            else if (!preparation_time) {
                throw new AppError("O campo tempo de preparação é obrigatorio", 400);
            }
            else if (!is_fitness) {
                throw new AppError("O campo is_fitness é obrigatorio", 400);
            } 
            else {
                const recipe = this.recipeRepository.create(req.body);

                await this.recipeRepository.save(recipe);

                res.status(201).json(recipe);
            }
        } catch (error) {
            next(error);
        }
    };

    listAll = async (req: Request, res: Response, next: NextFunction ) => {
        try {

            const recipes = await this.recipeRepository.find({
                relations: ["recipes_ingredients", "recipes_steps"],
            });

            res.status(200).json(recipes);

        } catch (error) {
            next(error);
        }
    }

}

export default RecipeController;
