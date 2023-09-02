'use client'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Avatar } from './avatar'

export function DropdownMenu(): JSX.Element {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          aria-label='Customise options'
          className='flex justify-center items-center bg-white gap-2 '
          type='button'>
          <Avatar />
          Daniel CG <span className='ml-2'>▼</span>
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className='min-w-[200px] bg-white rounded-b-md p-2 shadow-md flex flex-col gap-y-4'
          sideOffset={9}>
          <DropdownMenuPrimitive.Item>⚙️ Settings</DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>⚙️ Settings</DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>⚙️ Settings</DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
