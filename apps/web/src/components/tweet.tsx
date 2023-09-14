'use client'

import { Avatar, Box, Date } from 'ui'
import { type tweet } from '../types/tweet'
import { Bookmark, Heart, MessageSquare, Repeat2 } from 'lucide-react'
import { CommentInput } from './comment-input'

export function Tweet({ body, numLikes, numRetweets }: tweet): JSX.Element {
  return (
    <Box>
      <div className='flex flex-col gap-5'>
        <header className='flex gap-4'>
          <Avatar />
          <div className='flex flex-col'>
            <span className='font-medium'>Mikael Stanley</span>
            <Date />
          </div>
        </header>
        <main className='flex flex-col '>
          <p className='mb-4'>{body}</p>

          <div className='flex gap-4 justify-end text-sm mb-2'>
            <span className='text-gray-400 font-medium tracking-tighter'>
              449 Comments
            </span>
            <span className='text-gray-400 font-medium tracking-tighter'>
              {numRetweets} Retweets
            </span>
            <span className='text-gray-400 font-medium tracking-tighter'>
              {numLikes} likes
            </span>
          </div>

          <hr />
          <footer className='flex justify-around items-center py-4'>
            <button className='hover:bg-[#F2F2F2] rounded-lg px-11 py-3 text-sm font-medium text-[#4F4F4F] -tracking-[-0,49px] flex justify-center gap-3'>
              <MessageSquare size={20} /> Comment
            </button>
            <button className='hover:bg-[#F2F2F2] rounded-lg px-11 py-3 text-sm font-medium text-[#4F4F4F] -tracking-[-0,49px] flex justify-center gap-3'>
              <Repeat2 size={20} /> Retweeted
            </button>
            <button className='hover:bg-[#F2F2F2] rounded-lg px-11 py-3 text-sm font-medium text-[#4F4F4F] -tracking-[-0,49px] flex justify-center gap-3'>
              <Heart size={20} /> Liked
            </button>
            <button className='px-11 py-3 hover:bg-[#F2F2F2] rounded-lg text-sm font-medium text-[#4F4F4F] -tracking-[-0,49px] flex justify-center gap-3'>
              <Bookmark size={20} /> Saved
            </button>
          </footer>

          <hr />
          <div className='py-3'>
            <CommentInput />
          </div>
        </main>
      </div>
    </Box>
  )
}
