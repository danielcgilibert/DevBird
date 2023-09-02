'use client'

import { Avatar, DropdownMenu } from 'ui'

export function Header(): JSX.Element {
  return (
    <div className=' bg-white w-full h-16 px-20 flex items-center justify-between'>
      <span className='flex justify-center items-center font-medium'>
        <img alt='icon' className='w-8 h-8' src='icon.svg' />
        DevBird
      </span>
      <nav>
        <ul className=' space-x-20 flex justify-center items-center '>
          <li className='relative min-h-full'>
            <a
              href='/'
              className='border-b-2 border-[#2F80ED] font-semibold text-[#2F80ED] '>
              Home
            </a>
          </li>
          <li>
            <a href='/explore'>Explore</a>
          </li>
          <li>
            <a href='/bookmarks'>Bookmarks</a>
          </li>
        </ul>
      </nav>

      <div className='flex justify-center items-center gap-3'>
        <DropdownMenu />
      </div>
    </div>
  )
}
