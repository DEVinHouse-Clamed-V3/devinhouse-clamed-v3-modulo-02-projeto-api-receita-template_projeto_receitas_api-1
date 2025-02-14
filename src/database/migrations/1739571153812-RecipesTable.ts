import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RecipesTable1739571153812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                    name: 'recipes',
                    columns: [
                        {
                            name: 'id',
                            isPrimary: true,
                            type: 'serial'
                        },

                        {
                            name: 'name',
                            type: 'varchar',
                            isNullable: false,
                            length: '200',
                        },

                        {
                            name: 'preparation_time',
                            type: 'date',
                            isNullable: false,
                        },

                        {
                            name: 'is_fitness',
                            type: 'boolean',
                            default: false
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('recipes')
    }

}
