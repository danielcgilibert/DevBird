const getUser = (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello user!')
}

const deleteUser = (req: any, res: { send: (arg0: string) => void }) => {
  res.send('de user!')
}

export { getUser, deleteUser }
