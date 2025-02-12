import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipes_ingredients')
export class RecipesIngredients {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 100, nullable: false })
    name: string

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}