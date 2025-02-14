import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class RecipesIngredients {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

}

export default RecipesIngredients
