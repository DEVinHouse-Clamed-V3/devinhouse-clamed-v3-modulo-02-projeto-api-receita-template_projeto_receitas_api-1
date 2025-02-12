import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipes_steps')
export class RecipesSteps {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 100 })
    description: string;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}