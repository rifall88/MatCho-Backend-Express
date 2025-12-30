import prisma from "../database/dbConfig.js";

class Product {
  static async create(productData) {
    return prisma.product.create({
      data: productData,
    });
  }

  static async findAll() {
    return prisma.product.findMany({
      where: { deleted_at: null },
      orderBy: [{ created_at: "asc" }],
    });
  }
}

export default Product;
