import { Request, Response } from 'express'
import { createUserservice, deleteUserService, getAllUsersService, updateUserService } from '../services/users.service'

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
