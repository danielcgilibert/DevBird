import { UserModel } from '@app/models/user.model'
import { validateUser } from '@app/schemas/user'
import { compare, encrypt } from '@app/utils'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'process'

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await UserModel.getUserByEmail(email)

  if (!user) {
    return res.status(400).json({ message: 'Incorrect password or email' })
  }

  const isValid = compare(password, user.password)

  if (!isValid) {
    return res.status(400).json({ message: 'Incorrect password or email ' })
  }

  //TO DO: Review this
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username
    },
    process.env.JWT_SECRET || 'secret',
    {
      expiresIn: '5h'
    }
  )

  res.cookie('auth_token', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: true
  })

  res.status(200).json({
    message: 'Login success',
    user: { email: user.email, username: user.username, token }
  })
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

    const { email, password, username } = req.body

    const user = await UserModel.createUser({
      email: email,
      password: encrypt(password),
      username: username
    })

    res.status(201).json({ message: 'User created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { login, register }
