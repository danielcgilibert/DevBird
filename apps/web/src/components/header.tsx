'use client'

import { DropdownMenu } from 'ui'
import { LoginForm } from './login-form'
import { authStore } from '../store/authStore'
import Link from 'next/link'
import { UserMenu } from './user-menu'

export function Header(): JSX.Element {
  const { user } = authStore()

  return (
    <div className=' bg-white w-full h-16 px-20  grid grid-cols-3 justify-items-stretch  items-center '>
      <span className='flex justify-center items-center font-medium justify-self-start'>
        <img alt='icon' className='w-8 h-8' src='icon.svg' />
        DevBird
      </span>
      <nav>
        <ul className=' space-x-20 flex justify-center items-center '>
          <li className='relative min-h-full'>
            <Link
              href='/'
              className='border-b-2 border-[#2F80ED] font-semibold text-[#2F80ED] '>
              Home
            </Link>
          </li>
          <li>
            <Link href='/explore'>Explore</Link>
          </li>
          <li>
            <Link href='/bookmarks'>Bookmarks</Link>
          </li>
        </ul>
      </nav>

      <div className='flex justify-center items-center gap-3 justify-self-end'>
        {user ? (
          <UserMenu />
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </div>
  )
}
