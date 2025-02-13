import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateForeginKeyInSteps1739440440810 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
            
        await queryRunner.addColumn('recipes_steps', new TableColumn({
            name: 'recipe_id',
            type: 'int',
            isNullable: false
        }));

        await queryRunner.createForeignKey(
            'recipes_steps', 
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
        const table = await queryRunner.getTable('recipes_steps');
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf('recipe_id') !== -1);
        if (foreignKey) {
        await queryRunner.dropForeignKey('recipes_steps', foreignKey);
        }
        await queryRunner.dropTable('recipes_steps');
        await queryRunner.dropTable('recipes');
    }

}
