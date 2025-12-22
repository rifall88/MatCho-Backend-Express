-- AlterTable
ALTER TABLE `carts` MODIFY `user_id` INTEGER NULL,
    MODIFY `product_id` INTEGER NULL,
    MODIFY `updated_by` INTEGER NULL,
    MODIFY `created_by` INTEGER NULL;

-- AlterTable
ALTER TABLE `orders` MODIFY `user_id` INTEGER NULL,
    MODIFY `product_id` INTEGER NULL,
    MODIFY `updated_by` INTEGER NULL,
    MODIFY `created_by` INTEGER NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `updated_by` INTEGER NULL,
    MODIFY `created_by` INTEGER NULL;

-- AlterTable
ALTER TABLE `shippings` MODIFY `user_id` INTEGER NULL,
    MODIFY `order_id` INTEGER NULL,
    MODIFY `updated_by` INTEGER NULL,
    MODIFY `created_by` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `updated_by` INTEGER NULL,
    MODIFY `created_by` INTEGER NULL;
