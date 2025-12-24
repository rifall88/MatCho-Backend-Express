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

  static async findById(id) {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  static async update(id, userData) {
    try {
      return prisma.user.update({
        where: { id: parseInt(id) },
        data: userData,
      });
    } catch (err) {
      if ((err.code = "P2025")) {
        return null;
      }
      throw err;
    }
  }

  static async delete(id) {
    try {
      return prisma.user.delete({
        where: { id: parseInt(id), deleted_at: null },
      });
    } catch (err) {
      if ((err.code = "P2025")) {
        return null;
      }
      throw err;
    }
  }
}

export default User;
