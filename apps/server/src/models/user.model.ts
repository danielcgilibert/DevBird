import { prisma } from '@config/db'

export class UserModel {
  static async getAll() {
    const users = await prisma.user.findMany()
    return users
  }
}
