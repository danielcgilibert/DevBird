import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Prisma',
      password: await hash('1234', 10),
      username: 'ali42'
    }
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      firstName: 'Bob',
      lastName: 'Doe',
      username: 'bob42',
      password: await hash('1234', 10),
      tweets: {
        create: [
          {
            body: 'Hello world',
            num_comments: 5,
            num_retweets: 10,
            num_likes: 42
          }
        ]
      }
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
