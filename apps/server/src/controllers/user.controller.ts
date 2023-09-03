const getUser = (req: any, res: any) => {
  res.send('Hello user!')
}

const deleteUser = (req: any, res: any) => {
  res.send('de user!')
}

export { getUser, deleteUser }
