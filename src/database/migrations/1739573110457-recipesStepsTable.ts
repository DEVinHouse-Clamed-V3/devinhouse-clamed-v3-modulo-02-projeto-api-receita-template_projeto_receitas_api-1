import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RecipesStepsTable1739573110457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable (
            new Table ({
                name: 'recipe_steps',
                columns: [
                    {
                        name:'id',
                        isPrimary: true,
                        type: 'serial'
                    },

                    {
                        name: 'description',
                        type: 'text',
                        isNullable: false
                    },

                    {
                        name: 'created_at',
                        type: 'date'
                    },
                    
                    {
                        name: 'updated_at',
                        type: 'date'
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        queryRunner.dropTable('recipe_steps')
    
    }

}
