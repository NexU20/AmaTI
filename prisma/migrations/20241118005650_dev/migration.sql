/*
  Warnings:

  - You are about to alter the column `jenis` on the `document` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `file` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `document` ADD COLUMN `file` VARCHAR(191) NOT NULL,
    MODIFY `jenis` VARCHAR(191) NOT NULL;
