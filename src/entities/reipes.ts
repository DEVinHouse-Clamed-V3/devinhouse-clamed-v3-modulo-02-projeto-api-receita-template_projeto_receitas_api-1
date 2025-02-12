import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipes')
export class Recipe {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({ type: 'varchar', length: 200, nullable: false })
    name:string

    @Column({ type: 'time', nullable: false })
    preparation_time:Date

    @Column({ type: 'boolean', default: false })
    is_fitness:boolean

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at:Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at:Date
}