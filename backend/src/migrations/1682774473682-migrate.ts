import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1682774473682 implements MigrationInterface {
    name = 'Migrate1682774473682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "mostRecentSubmission" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "mostRecentSubmission" SET NOT NULL`);
    }

}
