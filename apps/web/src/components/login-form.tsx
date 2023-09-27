'use client'

import { loginUser } from '@services/loginUser'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button
} from 'ui'
import { authStore } from '../store/authStore'

export function LoginForm(): JSX.Element {
  const { login, setAuthentication } = authStore()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    console.log(email, password)

    const resp = await loginUser({ email, password })
    login(resp!.user)
    setAuthentication(true)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className='bg-blue-500 ml-auto w-20 h-8 rounded text-white'>
          Login
        </DialogTrigger>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Log in to DevBird</DialogTitle>
            <div className='py-8'>
              <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                <input
                  className='pl-4 py-2 rounded-full bg-[#F5F8FA] placeholder:font-medium'
                  type='email'
                  name='email'
                  placeholder='example@gmail.com'
                  value={'bob@prisma.io'}
                  id='email'
                />
                <input
                  className='pl-4 py-2 rounded-full bg-[#F5F8FA] placeholder:font-medium '
                  type='password'
                  name='password'
                  value={'1234'}
                  placeholder='Password'
                  id='password'
                />
                <Button className='w-full rounded-full'>Login</Button>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
