import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipes } from "./recipes";

@Entity('recipes_ingredients')
export class RecipesIngredients {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 100, nullable: false })
    name: string

    @ManyToOne(() => Recipes, recipe => recipe.recipes_ingredients, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipes

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}