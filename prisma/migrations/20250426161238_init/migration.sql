-- CreateTable
CREATE TABLE `Users` (
    `Id` VARCHAR(191) NOT NULL,
    `FirstName` VARCHAR(100) NOT NULL,
    `LastName` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `PhoneNumber` VARCHAR(20) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Users_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Addresses` (
    `Id` VARCHAR(191) NOT NULL,
    `UserId` VARCHAR(100) NOT NULL,
    `LocationId` VARCHAR(100) NOT NULL,
    `Street` VARCHAR(100) NOT NULL,
    `Number` VARCHAR(50) NOT NULL,
    `Between` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accounts` (
    `Id` VARCHAR(191) NOT NULL,
    `UserId` VARCHAR(100) NOT NULL,
    `RoleId` VARCHAR(100) NOT NULL,
    `UserName` VARCHAR(100) NOT NULL,
    `UserPass` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `EmailValidated` BOOLEAN NOT NULL DEFAULT false,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Accounts_UserName_key`(`UserName`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `Id` VARCHAR(191) NOT NULL,
    `RoleName` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Locations` (
    `Id` VARCHAR(191) NOT NULL,
    `ProvinceId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provinces` (
    `Id` VARCHAR(191) NOT NULL,
    `CountryId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Countries` (
    `Id` VARCHAR(191) NOT NULL,
    `ProvinceId` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentTypes` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `CreatedDate` TIMESTAMP NOT NULL,
    `FinalDate` DATETIME(3) NULL,
    `State` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contacts` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `description` VARCHAR(250) NULL,
    `completedAt` TIMESTAMP NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Addresses` ADD CONSTRAINT `Addresses_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `Users`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Addresses` ADD CONSTRAINT `Addresses_LocationId_fkey` FOREIGN KEY (`LocationId`) REFERENCES `Locations`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `Users`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_RoleId_fkey` FOREIGN KEY (`RoleId`) REFERENCES `Roles`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Locations` ADD CONSTRAINT `Locations_ProvinceId_fkey` FOREIGN KEY (`ProvinceId`) REFERENCES `Provinces`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provinces` ADD CONSTRAINT `Provinces_CountryId_fkey` FOREIGN KEY (`CountryId`) REFERENCES `Countries`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
