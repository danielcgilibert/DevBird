'use client'

import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu
} from 'ui'

export function Header(): JSX.Element {
  return (
    <div className=' bg-white w-full h-16 px-20  grid grid-cols-3 justify-items-stretch  items-center '>
      <span className='flex justify-center items-center font-medium justify-self-start'>
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

      <div className='flex justify-center items-center gap-3 justify-self-end'>
        {/* <DropdownMenu /> */}
        <Dialog>
          <DialogTrigger className='bg-blue-500 ml-auto w-20 h-8 rounded text-white'>
            Login
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
