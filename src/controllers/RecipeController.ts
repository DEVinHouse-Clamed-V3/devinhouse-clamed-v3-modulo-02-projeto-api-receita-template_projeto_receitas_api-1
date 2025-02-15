import { Request, Response } from "express";
import { AppDataSource ,} from "../data-source";
import Recipe from "../entities/Recipes";
import RecipesIngredients from "../entities/RecipesIngredients";
import RecipeSteps from "../entities/RecipesSteps";


class RecipeController {

    private static RecipeRepository = AppDataSource.getRepository( Recipe ) 

    private static RecipeIngredientRepository = AppDataSource.getRepository( RecipesIngredients ) 

    private static RecipeStepRepository = AppDataSource.getRepository( RecipeSteps )


    private static Validate( item: Recipe ){

        const sendStatus = ( message: string, valid: boolean = false ) => ({ valid, message })
        
        if( !item.name ){

            return sendStatus( 'Insira um nome' )

        }

        if( item.ingredients.length < 0 ){
            
            return sendStatus( 'Insira os ingredientes' )

        }

        if( item.steps.length < 0 ){
            
            return sendStatus( 'Insira os passos' )

        }

        if( item.id ){

            return sendStatus( 'Não é possível definir o id' )

        }

        return sendStatus( '', true)
    }

    private static async Transition( recipe: Recipe){

        const queryRunner = AppDataSource.createQueryRunner()

        await queryRunner.connect()

        await queryRunner.startTransaction()

        try {
            const savedRecipe = await this.RecipeRepository.save( recipe )

            const self = this

            const arrays = [ recipe.steps, recipe.ingredients ]

            for (const aa of arrays) {

                for (const element of aa) {

                    await self.RecipeIngredientRepository.save({
                        ...element,
                        recipeId: savedRecipe.id
                    })
                    
                }

            }


            await queryRunner.commitTransaction()

        } catch (err) {

            await queryRunner.rollbackTransaction()

        } finally {

            await queryRunner.release()
        }
    }

    public static createRecipe = async ( req: Request, res: Response ) => {
        try {

            const recipeBody = req.body as Recipe
            
            const validation = this.Validate( recipeBody )

            if( !validation.valid ){
                
                res.status( 400 ).json( validation.message )
                
                return
            }

            await this.Transition( recipeBody )

            res.status( 201 ).json( recipeBody )


        } catch ( ex ){

            console.error( ex )

            res.status( 500 ).json('Erro interno')
            
        } 
    } 

    public static getRecipes = async ( req: Request, res: Response ) => {

        try {

            const recipes = await this.RecipeRepository.find({relations: ["ingredients", "steps"]})


            res.status( 201 ).json( recipes )

        } catch ( ex ){

            console.error( ex )

            res.status( 500 ).json('Erro interno')
            
        } 

    }

}

export default RecipeController;



/*

public static p = async ( req: Request, res: Response ) => {
    try {

    } catch ( ex ){

        console.error( ex )

        res.status( 500 ).json('Erro interno')
        
    } 
} 
*/