'use client'

import { Globe2, LogOut, Settings, User, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  Avatar,
  DropdownMenuSeparator
} from 'ui'

export function UserMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex gap-3 justify-center items-center outline-none'>
          <Avatar />
          Daniel CG
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='px-3 py-2.5 flex flex-col gap-3 w-52 bg-white shadow-sm  rounded-xl '>
          <DropdownMenuItem className='flex justify-start items-center gap-2 hover:bg-gray-200 rounded-lg h-10 pl-3 text-sm'>
            <Button className='flex justify-start items-center bg-transparent text-black w-full gap-2'>
              <User />
              My profile
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className=' gap-2 hover:bg-gray-200 rounded-lg h-10 pl-3 text-sm'>
            <Button className='flex justify-start items-center bg-transparent text-black w-full gap-2'>
              <Settings />
              Settings
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator className='bg-gray-200' />
          <DropdownMenuItem className=' gap-2 hover:bg-red-100 rounded-lg h-10 pl-3 text-sm'>
            <Button className='flex justify-start items-center bg-transparent text-red-500 w-full gap-2 '>
              <LogOut />
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
