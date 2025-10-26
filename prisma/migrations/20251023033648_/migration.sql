/*
  Warnings:

  - You are about to alter the column `CreatedDate` on the `accountmenus` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `accounts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `addresses` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `completedAt` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `lots` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `menues` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `paymenttypes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `presentations` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `provinces` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `subcategories` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `submenues` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `suppliers` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[Name]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ProductCode]` on the table `Lots` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Name]` on the table `PaymentTypes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Name]` on the table `Presentations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Name]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `accountmenus` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `accounts` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `addresses` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `contacts` MODIFY `completedAt` TIMESTAMP NULL,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `lots` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `menues` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `paymenttypes` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `presentations` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `provinces` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `subcategories` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `submenues` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `suppliers` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Categories_Name_key` ON `Categories`(`Name`);

-- CreateIndex
CREATE UNIQUE INDEX `Lots_ProductCode_key` ON `Lots`(`ProductCode`);

-- CreateIndex
CREATE UNIQUE INDEX `PaymentTypes_Name_key` ON `PaymentTypes`(`Name`);

-- CreateIndex
CREATE UNIQUE INDEX `Presentations_Name_key` ON `Presentations`(`Name`);

-- CreateIndex
CREATE UNIQUE INDEX `Roles_Name_key` ON `Roles`(`Name`);
