import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableRecipesSteps1739304049921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'recipes_steps',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recipes_steps')
    }

}

/* 1 - Migration: Crie uma migration que criará a tabela recipes_steps banco de dados com os seguintes campos:

    id (inteiro, chave primária, autoincremento).

    description (varchar 100 NOT NULL).

    created_at (data e hora, tipo timestamp, data de criação do autor).

    updated_at (data e hora, tipo timestamp, data da última atualização).
 */