import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class RecipeController {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    preparation_time: Date

    @Column()
    is_fitness: boolean

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

}

export default RecipeController;
