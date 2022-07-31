import jwt from 'jsonwebtoken'
import dontenv from 'dotenv'
dontenv.config()

const { JWT_SECRET_KEY } = process.env

export const generate = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '24h' })
}

export const decode = (accessToken: string) => {
  return jwt.verify(accessToken, JWT_SECRET_KEY)
}
