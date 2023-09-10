import { Avatar, Box } from 'ui'
import { Trending } from '@components/trending'
import { TweetBox } from '@components/tweet-box'
import { Tweet } from '@components/tweet'
import { getTweets } from '@services/getTweets'

export default async function Page() {
  const tweets = await getTweets()
  return (
    <main className='grid grid-cols-[auto,300px] gap-8'>
      <div className='flex flex-col gap-6'>
        <TweetBox />
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
      <aside className='flex flex-col gap-6 sticky top-14 self-start'>
        <Trending />
        <Box>
          <span className='text-xs font-semibold mb-2'>Who to follow</span>
          <hr />
          <ul className='flex flex-col gap-6  py-6'>
            <li className='flex justify-start items-center gap-2'>
              <Avatar />
              <div className='flex flex-col'>
                <span>Mikael Stanley</span>
                <span className='text-xs text-neutral-500'>@mikael</span>
              </div>
            </li>
          </ul>
        </Box>
      </aside>
    </main>
  )
}
