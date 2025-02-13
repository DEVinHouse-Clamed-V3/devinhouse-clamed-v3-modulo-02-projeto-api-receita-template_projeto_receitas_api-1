import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RecipesSteps } from "./recipes_steps";
import { RecipesIngredients } from "./recipes_ingredients";

@Entity('recipes')
export class Recipes {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({ type: 'varchar', length: 200, nullable: false })
    name:string

    @Column({ type: 'time', nullable: false })
    preparation_time:Date

    @Column({ type: 'boolean', default: false })
    is_fitness:boolean

    @OneToMany(() => RecipesSteps, recipes_steps => recipes_steps.recipe, { cascade: true })
    recipes_steps:RecipesSteps[]

    @OneToMany(() => RecipesIngredients, recipes_ingredients => recipes_ingredients.recipe, { cascade: true })
    recipes_ingredients:RecipesIngredients[]

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at:Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at:Date
}