import { env } from '@config/index'

export const loginUser = async (userData: {
  email: string
  password: string
}) => {
  try {
    const resp = await fetch(`${env.api}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const { jwt, message, user } = await resp.json()

    return { jwt, message, user }
  } catch (error) {
    console.log(error)
    return null
  }
}
