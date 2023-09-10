import { env } from '@config/index'

interface tweet {
  id: string
  body: string
  createdAt: string
  updatedAt: string
  num_likes: number
  num_retweets: number
}

export const getTweets = async () => {
  try {
    const resp = await fetch(`${env.api}/tweets/all`)
    const tweets = await resp.json()

    const mappedTweets = tweets.map((tweet: tweet) => {
      return {
        id: tweet.id,
        body: tweet.body,
        createdAt: tweet.createdAt,
        updatedAt: tweet.updatedAt,
        numLikes: tweet.num_likes,
        numRetweets: tweet.num_retweets
      }
    })

    return mappedTweets
  } catch (error) {
    console.log(error)
    return []
  }
}
