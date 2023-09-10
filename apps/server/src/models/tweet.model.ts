import { prisma } from '@app/config/db'

export class TweetModel {
  static async getAll() {
    const tweets = await prisma.tweet.findMany()
    return tweets
  }
}
