import { env } from '@config/index'

export const loginUser = async (userData: {
  email: string
  password: string
}) => {
  try {
    console.log(userData)

    const resp = await fetch(`${env.api}/auth/login`, {
      method: 'POST',
      credentials: 'include',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(userData)
    })

    const user = await resp.json()
    console.log(user)

    return 'user'
  } catch (error) {
    console.log(error)
    return null
  }
}
