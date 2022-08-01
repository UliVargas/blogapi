import { Request, Response } from 'express'

import {
  createUserservice,
  deleteUserService,
  findByEmail,
  getAllUsersService,
  updateUserService
} from '../services/users.service'

import { comparePassword } from '../middleware/auth/bcrypt'
import { generate } from '../middleware/auth/JWT'

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService()
  res.send(users)
}

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserservice(req.body)
  res.send(user)
}

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params
  const user = await updateUserService(userId, req.body)
  res.send(user)
}

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params
  const user = await deleteUserService(userId)
  res.send(user)
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user: any = await findByEmail(email)
  if (!user) throw new Error('USER_NOT_FOUND')
  const isValidUser = await comparePassword(password, user.password)
  if (!isValidUser) throw new Error('INVALID_CREDENTIALS')
  const payload = {
    user: user.id
  }
  const token = generate(payload)
  res.send({ ...payload, token })
}
