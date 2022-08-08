import jwt from 'jsonwebtoken'
import dontenv from 'dotenv'
dontenv.config()

const { JWT_SECRET_KEY } = process.env

export const generate = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET_KEY)
}

export const decode = (accessToken: string) => {
  return jwt.verify(accessToken, JWT_SECRET_KEY)
}

export default (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  try {
    req.USER = decode(token)
    req.token = token
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}
