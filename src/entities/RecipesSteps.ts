import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Recipe from "./Recipes";

@Entity("recipe_steps")
class RecipeSteps {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    description: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    @Column({ nullable: false })
    stepId: number

    @ManyToOne( () => RecipeSteps, recipeSteps => recipeSteps.step )
    @JoinTable({ name: 'stepId'})
    step: RecipeSteps
}

export default RecipeSteps
