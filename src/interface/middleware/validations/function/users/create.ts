import { NextFunction, Request, Response } from 'express'
import { createSchema } from '../../schema/users'
import validateData from '../validateData'

export default async (req: Request, res: Response, next: NextFunction) => {
  await validateData(createSchema, req.body)
  next()
}
