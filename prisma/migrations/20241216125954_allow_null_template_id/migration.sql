-- AlterTable
ALTER TABLE `templates_users` ADD COLUMN `name` VARCHAR(191) NULL,
    MODIFY `templateId` INTEGER NULL;
