import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("recipes")
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: "varchar", nullable: false })
  name: string;

  @Column({ type: "time", nullable: false })
  preparation_time: string;

  @Column({ type: "boolean", nullable: false, default: false })
  is_fitness: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
}
