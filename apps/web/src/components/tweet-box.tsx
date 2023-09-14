'use client'

import { Globe2, Image, Users } from 'lucide-react'
import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'ui'

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
          <div className='flex flex-col gap-3'>
            <textarea
              placeholder={`what's happening?`}
              className='w-full tracking-tighter resize-none outline-none border-none font-sans '
            />

            <div className='flex'>
              <div className='flex gap-2 justify-center items-center'>
                <span className='text-sm text-blue-500 font-medium'>
                  <Image size={20} />
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className='flex justify-center items-center gap-1.5 text-sm text-blue-500 font-medium'>
                      <Globe2 size={20} /> Everyone can reply
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align='start'
                    className='px-3 py-2.5 flex flex-col gap-3 bg-white shadow-sm w-[234px] rounded-xl '>
                    <div className='flex flex-col'>
                      <span className='text-xs font-semibold tracking-[-0.42px]	'>
                        Who can reply?
                      </span>
                      <span className='text-xs text-gray-500 tracking-[-0.42px]'>
                        Choose who can reply to this Tweet
                      </span>
                    </div>

                    <DropdownMenuItem className='flex justify-start items-center gap-2 hover:bg-gray-200 rounded-lg h-10 pl-3 text-sm'>
                      <Button className='flex justify-start items-center bg-transparent text-black w-full gap-2'>
                        <Globe2 size={20} color='black' />
                        Everyone
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=' gap-2 hover:bg-gray-200 rounded-lg h-10 pl-3 text-sm'>
                      <Button className='flex justify-start items-center bg-transparent text-black w-full gap-2'>
                        <Users size={20} color='black' />
                        People you follow
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button>Tweet</Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
