import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RecipeIngredient } from "./RecipeIngredients";
import { RecipeStep } from "./RecipeSteps";

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

  @OneToMany(() => RecipeIngredient, (ingredient) => ingredient.recipe)
  ingredients: RecipeIngredient[];

  @OneToMany(() => RecipeStep, (step) => step.recipe)
  steps: RecipeStep[];
}
