import prisma from "../database/dbConfig.js";

class User {
  static async create(userData) {
    return prisma.user.create({
      data: userData,
    });
  }

  static async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        phone: true,
        role: true,
      },
      orderBy: [{ created_at: "asc" }],
    });
  }
}

export default User;
