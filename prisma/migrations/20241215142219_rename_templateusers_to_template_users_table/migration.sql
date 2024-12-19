/*
  Warnings:

  - You are about to drop the `templatesusers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `templatesusers` DROP FOREIGN KEY `TemplatesUsers_templateId_fkey`;

-- DropForeignKey
ALTER TABLE `templatesusers` DROP FOREIGN KEY `TemplatesUsers_userId_fkey`;

-- DropTable
DROP TABLE `templatesusers`;

-- CreateTable
CREATE TABLE `Templates_Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `templateId` INTEGER NOT NULL,
    `content` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    INDEX `TemplatesUsers_userId_fkey`(`userId`),
    INDEX `TemplatesUsers_templateId_fkey`(`templateId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Templates_Users` ADD CONSTRAINT `TemplatesUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Templates_Users` ADD CONSTRAINT `TemplatesUsers_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `Templates`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
