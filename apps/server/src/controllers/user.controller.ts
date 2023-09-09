import { UserModel } from '@models/user.model'

const getAll = async (req: any, res: any) => {
  const users = await UserModel.getAll()
  console.log(users)
}

const getUser = (req: any, res: any) => {
  res.send('Hello user!')
}

const deleteUser = (req: any, res: any) => {
  res.send('de user!')
}

export { getUser, deleteUser, getAll }
