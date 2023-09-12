import { prisma } from '@config/db'

export class UserModel {
  static async getAll() {
    const users = await prisma.user.findMany()
    return users
  }

  static async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return user
  }

  static async createUser(userData: {
    email: string
    password: string
    username: string
  }) {
    const { email, password, username } = userData
    const user = await prisma.user.create({
      data: {
        email,
        password,
        username
      }
    })
    return user
  }
}
