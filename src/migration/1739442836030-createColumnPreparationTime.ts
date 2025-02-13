import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateColumnPreparationTime1739442836030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.addColumn('recipes', new TableColumn({
            name: 'preparation_time',
            type: 'int',
            isNullable: false
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('recipes', 'preparation_time');
    }

}
