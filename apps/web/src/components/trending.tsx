'use client'

import { Box } from 'ui'

export function Trending(): JSX.Element {
  return (
    <Box>
      <span className='text-xs font-semibold mb-2'>Trends for your</span>
      <hr />
      <ul className='flex flex-col gap-6  py-6'>
        <li className='flex flex-col gap-2'>
          <span className='font-semibold from-neutral-800'>#programing</span>
          <span className='text-xs text-neutral-500'>213k Tweets</span>
        </li>
        <li className='flex flex-col gap-2'>
          <span className='font-semibold from-neutral-800'>#devchallenges</span>
          <span className='text-xs text-neutral-500'>34k Tweets</span>
        </li>
        <li className='flex flex-col gap-2'>
          <span className='font-semibold from-neutral-800'>#frontend</span>
          <span className='text-xs text-neutral-500'>11k Tweets</span>
        </li>
        <li className='flex flex-col gap-2'>
          <span className='font-semibold from-neutral-800'>#100DaysOfCode</span>
          <span className='text-xs text-neutral-500'>5k Tweets</span>
        </li>
        <li className='flex flex-col gap-2'>
          <span className='font-semibold from-neutral-800'>#leartocode</span>
          <span className='text-xs text-neutral-500'>1k Tweets</span>
        </li>
      </ul>
    </Box>
  )
}
