/*
  Warnings:

  - You are about to alter the column `CreatedDate` on the `accounts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `LocationId` on the `addresses` table. All the data in the column will be lost.
  - You are about to alter the column `CreatedDate` on the `addresses` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `completedAt` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `countries` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `locations` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `paymenttypes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `provinces` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `RoleName` on the `roles` table. All the data in the column will be lost.
  - You are about to alter the column `CreatedDate` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `Country` to the `Addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Location` to the `Addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Province` to the `Addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CreatedDate` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `addresses` DROP FOREIGN KEY `Addresses_LocationId_fkey`;

-- DropIndex
DROP INDEX `Addresses_LocationId_fkey` ON `addresses`;

-- AlterTable
ALTER TABLE `accounts` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `addresses` DROP COLUMN `LocationId`,
    ADD COLUMN `Country` VARCHAR(150) NOT NULL,
    ADD COLUMN `Location` VARCHAR(150) NOT NULL,
    ADD COLUMN `Province` VARCHAR(150) NOT NULL,
    ADD COLUMN `locationsId` VARCHAR(191) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `CreatedDate` TIMESTAMP NOT NULL,
    ADD COLUMN `State` INTEGER NOT NULL DEFAULT 1,
    MODIFY `completedAt` TIMESTAMP NULL;

-- AlterTable
ALTER TABLE `countries` MODIFY `Description` VARCHAR(100) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `locations` MODIFY `Description` VARCHAR(100) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `paymenttypes` MODIFY `Description` VARCHAR(100) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `provinces` MODIFY `Description` VARCHAR(100) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `RoleName`,
    ADD COLUMN `Name` VARCHAR(100) NOT NULL,
    MODIFY `Description` VARCHAR(100) NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `Menues` (
    `Id` VARCHAR(191) NOT NULL,
    `Position` INTEGER NOT NULL DEFAULT 0,
    `Name` VARCHAR(100) NOT NULL,
    `Url` VARCHAR(100) NOT NULL,
    `HasSubMenu` BOOLEAN NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Menues_Name_key`(`Name`),
    UNIQUE INDEX `Menues_Url_key`(`Url`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubMenues` (
    `Id` VARCHAR(191) NOT NULL,
    `MenuId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Url` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `SubMenues_Name_key`(`Name`),
    UNIQUE INDEX `SubMenues_Url_key`(`Url`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountMenus` (
    `Id` VARCHAR(191) NOT NULL,
    `MenuId` VARCHAR(100) NOT NULL,
    `AccountId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubCategories` (
    `Id` VARCHAR(191) NOT NULL,
    `CategoryId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presentations` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Suppliers` (
    `Id` VARCHAR(191) NOT NULL,
    `CompanyName` VARCHAR(100) NOT NULL,
    `Address` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(50) NULL,
    `Phone` VARCHAR(20) NULL,
    `Web` VARCHAR(120) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Suppliers_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `Id` VARCHAR(191) NOT NULL,
    `SubCategoryId` VARCHAR(100) NOT NULL,
    `PresentationId` VARCHAR(100) NOT NULL,
    `SupplierId` VARCHAR(50) NOT NULL,
    `Name` VARCHAR(20) NOT NULL,
    `ImageUrl` VARCHAR(200) NULL,
    `Description` VARCHAR(120) NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Products_SupplierId_key`(`SupplierId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lots` (
    `Id` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(100) NOT NULL,
    `LotCode` VARCHAR(100) NOT NULL,
    `ProductCode` VARCHAR(50) NOT NULL,
    `ExpiredDate` DATETIME(3) NULL,
    `HasExpiredDate` BOOLEAN NOT NULL,
    `stock` BIGINT NOT NULL,
    `PurchasePrice` DECIMAL(65, 30) NOT NULL,
    `SalePrice` DECIMAL(65, 30) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Lots_ProductCode_key`(`ProductCode`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Addresses` ADD CONSTRAINT `Addresses_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubMenues` ADD CONSTRAINT `SubMenues_MenuId_fkey` FOREIGN KEY (`MenuId`) REFERENCES `Menues`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountMenus` ADD CONSTRAINT `AccountMenus_AccountId_fkey` FOREIGN KEY (`AccountId`) REFERENCES `Accounts`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountMenus` ADD CONSTRAINT `AccountMenus_MenuId_fkey` FOREIGN KEY (`MenuId`) REFERENCES `Menues`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubCategories` ADD CONSTRAINT `SubCategories_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `Categories`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_SubCategoryId_fkey` FOREIGN KEY (`SubCategoryId`) REFERENCES `SubCategories`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_PresentationId_fkey` FOREIGN KEY (`PresentationId`) REFERENCES `Presentations`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_SupplierId_fkey` FOREIGN KEY (`SupplierId`) REFERENCES `Suppliers`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lots` ADD CONSTRAINT `Lots_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Products`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
