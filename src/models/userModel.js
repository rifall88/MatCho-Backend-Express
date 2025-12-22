import prisma from "../database/dbConfig.js";

class User {
  static async create(userData) {
    return prisma.user.create({
      data: userData,
    });
  }
}

export default User;
