import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RecipesTable1739571153812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'recipes',
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
                        isNullable: false,
                        length: '200',
                    },

                    {
                        name: 'preparation_time',
                        type: "timestamp",
                        isNullable: false,
                        default: 'CURRENT_TIMESTAMP'
                    },

                    {
                        name: 'is_fitness',
                        type: 'boolean',
                        default: false
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
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        queryRunner.dropTable('recipes')
    
    }

}
