'use client'

import { Avatar, Box } from 'ui'

export function TweetBox(): JSX.Element {
  return (
    <Box>
      <div className='flex flex-col gap-2'>
        <header className='border-b-[1px] border-gray-200'>
          <div className='pb-2 text-sm text-gray-700 font-semibold tracking-tighter '>
            Tweet something
          </div>
        </header>
        <div className='grid grid-cols-[60px,auto] items-baseline'>
          <div>
            <Avatar />
          </div>
          <div className='flex flex-col    gap-3'>
            <textarea
              placeholder={`what's happening?`}
              className='w-full tracking-tighter resize-none outline-none border-none font-sans '
            />

            <div className='flex'>
              <div className='flex gap-2 justify-center items-center'>
                <span className='text-sm text-blue-500 font-medium'>🌄</span>
                <span className='text-sm text-blue-500 font-medium'>
                  🌎 Everyone can reply
                </span>
              </div>
              <button className='bg-blue-500 ml-auto w-20 h-8 rounded text-white'>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
