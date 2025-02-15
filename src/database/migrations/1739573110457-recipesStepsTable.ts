import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class RecipesStepsTable1739573110457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name: 'recipe_steps',
                columns: [
                    {
                        name:'id',
                        isPrimary: true,
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },

                    {
                        name: 'description',
                        type: 'text',
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
                        name: 'stepId',
                        type: 'int',
                    }
                ]
            }), true
        )

        await queryRunner.createForeignKey(
    
            "recipe_steps",

            new TableForeignKey({
                columnNames: ["stepId"],
                referencedColumnNames: ["id"],
                referencedTableName: "recipes",
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('recipe_steps')
    

        await queryRunner.dropForeignKey('recipe_steps', 'stepId')

    }

}
