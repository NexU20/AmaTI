-- AlterTable
ALTER TABLE `document` ADD COLUMN `display_name` VARCHAR(191) NOT NULL DEFAULT 'tes.pdf';

-- AlterTable
ALTER TABLE `student` ALTER COLUMN `angkatan` DROP DEFAULT;
