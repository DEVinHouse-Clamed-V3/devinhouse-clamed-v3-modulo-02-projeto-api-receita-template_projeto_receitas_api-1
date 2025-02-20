import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("recipes_steps")
export class RecipeStep {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, type: "varchar", nullable: false })
  description: string;

  @Column({ type: "int", nullable: false })
  recipe_id: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.steps)
  @JoinColumn({ name: "recipe_id" })
  recipe: Recipe;
}
