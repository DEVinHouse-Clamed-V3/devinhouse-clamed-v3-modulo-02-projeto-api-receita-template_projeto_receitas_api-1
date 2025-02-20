import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("recipes_ingredients")
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, type: "varchar", nullable: false })
  name: string;

  @Column({ type: "int", nullable: false })
  recipe_id: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  @JoinColumn({ name: "recipe_id" })
  recipe: Recipe;
}
