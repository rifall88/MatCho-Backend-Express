-- AlterTable
ALTER TABLE `carts` ALTER COLUMN `updated_at` DROP DEFAULT,
    ALTER COLUMN `deleted_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `orders` ALTER COLUMN `updated_at` DROP DEFAULT,
    ALTER COLUMN `deleted_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `products` ALTER COLUMN `updated_at` DROP DEFAULT,
    ALTER COLUMN `deleted_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `shippings` ALTER COLUMN `updated_at` DROP DEFAULT,
    ALTER COLUMN `deleted_at` DROP DEFAULT;
