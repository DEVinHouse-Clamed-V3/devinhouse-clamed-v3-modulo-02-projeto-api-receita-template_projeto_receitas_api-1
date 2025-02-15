import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class RecipesIngredientsTable1739572873995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name: 'recipes_ingredients',
                columns: [
                    {
                        name:'id',
                        isPrimary: true,
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },

                    {
                        name: 'created_at',
                        type: "timestamp",
                        default: 'CURRENT_TIMESTAMP'
                    },
                    
                    {
                        name: 'updated_at',
                        type: "timestamp",
                        default: 'CURRENT_TIMESTAMP'
                    },

                    {
                        name: 'recipeId',
                        type: 'int',
                    }
                ]
            }), true
        )

        await queryRunner.createForeignKey(

            "recipes_ingredients",

            new TableForeignKey({
                columnNames: ["recipeId"],
                referencedColumnNames: ["id"],
                referencedTableName: "recipes",
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('recipes_ingredients')
    
        await queryRunner.dropForeignKey('recipes_ingredients', 'recipeId')

    }

}
