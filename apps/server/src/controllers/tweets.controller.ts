import { TweetModel } from '@app/models/tweet.model'

const getAll = async (req: any, res: any) => {
  const tweets = await TweetModel.getAll()

  res.json(tweets)
}

export { getAll }
