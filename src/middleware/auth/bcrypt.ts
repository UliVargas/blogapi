import bcrypt from 'bcryptjs'

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password, UserPassword) => {
  return await bcrypt.compare(password, UserPassword)
}
