-- AlterTable
ALTER TABLE `post` ADD COLUMN `tagId` INTEGER NULL;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
