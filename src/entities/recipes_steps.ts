import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipes } from "./recipes";

@Entity('recipes_steps')
export class RecipesSteps {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 100 })
    description: string;

    @ManyToOne(() => Recipes, recipe => recipe.recipes_steps, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipes;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}