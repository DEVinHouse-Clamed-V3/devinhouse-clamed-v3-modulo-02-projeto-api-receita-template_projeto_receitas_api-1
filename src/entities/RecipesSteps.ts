import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class RecipeSteps {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    description: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

}

export default RecipeSteps
