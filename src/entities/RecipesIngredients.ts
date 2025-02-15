import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Recipe from "./Recipes";
import RecipeSteps from "./RecipesSteps";

@Entity("recipes_ingredients")
class RecipesIngredients {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    
    @Column({ nullable: false })
    recipeId: number

    @ManyToOne( () => Recipe, recipe => recipe.ingredients )
    @JoinTable({ name: 'recipeId'})
    recipe: Recipe

}

export default RecipesIngredients
