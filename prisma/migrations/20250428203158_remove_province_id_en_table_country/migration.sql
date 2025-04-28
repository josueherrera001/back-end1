/*
  Warnings:

  - You are about to alter the column `CreatedDate` on the `accounts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `addresses` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `completedAt` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `ProvinceId` on the `countries` table. All the data in the column will be lost.
  - You are about to alter the column `CreatedDate` on the `countries` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `locations` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `paymenttypes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `provinces` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `CreatedDate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `accounts` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `addresses` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `contacts` MODIFY `completedAt` TIMESTAMP NULL;

-- AlterTable
ALTER TABLE `countries` DROP COLUMN `ProvinceId`,
    MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `locations` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `paymenttypes` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `provinces` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `CreatedDate` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `CreatedDate` TIMESTAMP NOT NULL;
