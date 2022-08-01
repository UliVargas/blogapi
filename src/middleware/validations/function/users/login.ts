import { NextFunction, Request, Response } from 'express'
import { loginSchema } from '../../schema/users'
import validateData from '../validateData'

export default async (req: Request, res: Response, next: NextFunction) => {
  await validateData(loginSchema, req.body)
  next()
}
