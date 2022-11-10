import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRolesTable1668111256449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"roles",
            columns:[
                {
                    name:"Id",
                    type:"uuid",
                    isPrimary:true,
                },
                {
                    name:"name",
                    type:"string",
                    isUnique:true,
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"CURRENT_TIMESTAMP"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles");
    }

}
