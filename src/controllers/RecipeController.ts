import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Recipe } from '../entity/Recipes';
class RecipeController {
  async create(req: Request, res: Response) {
    try {
      const { name, preparation_time, is_fitness } = req.body;

      if (!name || !preparation_time || is_fitness === undefined) {
        res.status(400).json({ message: 'Campos obrigatórios faltando' });
        return;
      }

      const recipe = await AppDataSource.getRepository(Recipe).findOne({
        where: { name: name },
      });

      if (recipe) {
        res.status(400).json({ message: 'Receita já cadastrada' });
        return;
      }

      const recipeRepository = AppDataSource.getRepository(Recipe).save({
        name: name,
        preparation_time: preparation_time,
        is_fitness: is_fitness,
      });

      if (recipeRepository) {
        return res.status(201).json(recipeRepository);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default RecipeController;
