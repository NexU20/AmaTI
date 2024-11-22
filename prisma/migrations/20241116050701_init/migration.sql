-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'prodi') NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `mahasiswa_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `nim` VARCHAR(191) NOT NULL,
    `ttl` VARCHAR(191) NOT NULL,
    `ayah_wali` VARCHAR(191) NOT NULL,
    `ibu` VARCHAR(191) NOT NULL,
    `no_ayah` VARCHAR(191) NOT NULL,
    `no_ibu` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_user_id_key`(`user_id`),
    UNIQUE INDEX `Student_nim_key`(`nim`),
    PRIMARY KEY (`mahasiswa_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `dokumen_id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswa_id` INTEGER NOT NULL,
    `jenis` ENUM('krs_sms1', 'krs_sms2', 'krs_sms3', 'krs_sms4', 'krs_sms5', 'krs_sms6', 'krs_sms7', 'krs_sms8', 'krs_sms9', 'krs_sms10', 'krs_sms11', 'krs_sms12', 'krs_sms13', 'krs_sms14', 'khs', 'transkrip_sms1', 'transkrip_sms2', 'transkrip_sms3', 'transkrip_sms4', 'transkrip_sms5', 'transkrip_sms6', 'transkrip_sms7', 'transkrip_sms8', 'transkrip_sms9', 'transkrip_sms10', 'transkrip_sms11', 'transkrip_sms12', 'transkrip_sms13', 'transkrip_sms14') NOT NULL,
    `iat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`dokumen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `admin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_user_id_key`(`user_id`),
    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_mahasiswa_id_fkey` FOREIGN KEY (`mahasiswa_id`) REFERENCES `Student`(`mahasiswa_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
