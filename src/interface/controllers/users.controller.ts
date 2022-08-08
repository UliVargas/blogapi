import { Request, Response } from 'express'

import {
  createUserservice,
  deleteUserService,
  findByIdService,
  getAllUsersService,
  loginService,
  updateUserService
} from '../../infrastructure/services/users.service'

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
  const login = await loginService(email, password)
  res.send(login)
}

export const findById = async (req: Request, res: Response) => {
  const user = await findByIdService(req.params.userId)
  res.send(user)
}
