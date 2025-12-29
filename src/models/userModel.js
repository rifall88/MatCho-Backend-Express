import prisma from "../database/dbConfig.js";

class User {
  static async create(userData) {
    return prisma.user.create({
      data: userData,
    });
  }

  static async findAll() {
    return prisma.user.findMany({
      where: { deleted_at: null },
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
      where: { id: parseInt(id), deleted_at: null },
    });
  }

  static async update(id, userData) {
    try {
      return prisma.user.update({
        where: { id: parseInt(id), deleted_at: null },
        data: userData,
      });
    } catch (err) {
      if ((err.code = "P2025")) {
        return null;
      }
      throw err;
    }
  }

  static async softdelete(id) {
    try {
      return prisma.user.update({
        where: { id: parseInt(id), deleted_at: null },
        data: { deleted_at: new Date(), is_enable: false },
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
