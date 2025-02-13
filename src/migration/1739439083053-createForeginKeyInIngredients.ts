import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateForeginKeyInIngredients1739439083053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.addColumn('recipes_ingredients', new TableColumn({
            name: 'recipe_id',
            type: 'int',
            isNullable: false
        }));

        await queryRunner.createForeignKey(
            'recipes_ingredients', 
            new TableForeignKey({
                columnNames: ['recipe_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'recipes',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover a foreign key antes de dropar a tabela 'posts'
        const table = await queryRunner.getTable('recipes_ingredients');
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf('recipe_id') !== -1);
        if (foreignKey) {
        await queryRunner.dropForeignKey('recipes_ingredients', foreignKey);
        }
        await queryRunner.dropTable('recipes_ingredients');
        await queryRunner.dropTable('recipes');
    }
}

