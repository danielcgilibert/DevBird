import { UserModel } from '@app/models/user.model'
import { validateUser } from '@app/schemas/user'
import { Request, Response } from 'express'

const getLogin = async (req: Request, res: Response) => {
  res.send('logued in!')
}

const register = async (req: Request, res: Response) => {
  try {
    const result = validateUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const existUser = await UserModel.getUserByEmail(req.body.email)

    if (existUser) {
      return res.status(400).json({ message: 'User already exist' })
    }

    res.status(201).json({ message: 'User created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getLogin, register }
