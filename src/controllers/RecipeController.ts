import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Recipe } from "../entities/reipes";
import AppError from "../utils/AppError";

class RecipeController {
    private recipeRepository

    constructor() {
        this.recipeRepository = AppDataSource.getRepository(Recipe)
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { name, preparation_time, is_fitness } = req.body;
            
            if(!name) {
               throw new AppError("O campo nome é obrigatorio", 400)
            }
            else if(!preparation_time) {
                throw new AppError('O campo tempo de preparação é obrigatorio', 400)
            }
            else if(!is_fitness){
                throw new AppError('O campo fitness é obrigatorio', 400)
            }
            else {
                const recipe = this.recipeRepository.create({
                    name,
                    preparation_time,
                    is_fitness
                })
        
                await this.recipeRepository.save(recipe)
        
                res.status(201).json(recipe)
            }
    
        } catch (error) {
            next(error)
        }
    }
 
}

export default RecipeController;
