-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT,
    ALTER COLUMN `deleted_at` DROP DEFAULT;
