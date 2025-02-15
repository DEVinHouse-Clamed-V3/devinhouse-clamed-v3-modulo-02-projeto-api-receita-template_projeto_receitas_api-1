import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RecipesIngredients from "./RecipesIngredients";
import RecipeSteps from "./RecipesSteps";

@Entity("recipes")
class Recipe {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    preparation_time: Date

    @Column()
    is_fitness: boolean

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date


    
    @OneToMany(() => RecipesIngredients, (ingredient) => ingredient.recipe, { cascade: true })
    ingredients: RecipesIngredients[]

    @OneToMany(() => RecipeSteps, (recipeStep) => recipeStep.step, { cascade: true })
    steps: RecipeSteps[]

}

export default Recipe
