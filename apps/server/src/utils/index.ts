import bcrypt from 'bcrypt'

export const encrypt = (password: string) => {
  const hash = bcrypt.hashSync(password, 10)
  return hash
}

export const compare = (password: string, hash: string) => {
  const isValid = bcrypt.compareSync(password, hash)
  return isValid
}
