'use client'

import { Avatar } from 'ui'

export function CommentInput(): JSX.Element {
  return (
    <div className='flex gap-3  items-center '>
      <div className='flex-1  '>
        <Avatar className='h-10 w-10' />
      </div>
      <textarea
        placeholder={`Tweet your reply`}
        className='w-full border-2 tracking-tighter h-10   border-gray-200 rounded-lg pl-2  pt-[5.5px] resize-none outline-none    '
      />
    </div>
  )
}
