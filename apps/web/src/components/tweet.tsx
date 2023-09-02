'use client'

import { Avatar, Box, Date } from 'ui'

export function Tweet(): JSX.Element {
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
        <main className='flex flex-col gap-5'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
          </p>

          <img
            className='rounded-md'
            src='https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          />

          <div className='flex gap-4 justify-end text-sm'>
            <span className='text-gray-400 font-medium tracking-tighter'>
              449 Comments
            </span>
            <span className='text-gray-400 font-medium tracking-tighter'>
              59k Retweets
            </span>
            <span className='text-gray-400 font-medium tracking-tighter'>
              234 Saved
            </span>
          </div>

          <hr />
          <footer className='flex justify-around items-center'>
            <span className='text-black text-sm font-medium -tracking-wider'>
              📝 Comment
            </span>
            <span className='text-green-500 text-sm font-medium -tracking-wider'>
              ↺ Retweeted
            </span>
            <span className='text-red-500 text-sm font-medium -tracking-wider'>
              ♥️ Liked
            </span>
            <span className='text-blue-500 text-sm font-medium -tracking-wider'>
              📤 Saved
            </span>
          </footer>
        </main>
      </div>
    </Box>
  )
}
