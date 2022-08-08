import { User } from '../entities/user.entity'
import prisma from '../database/orm/prisma/client/prisma'
import { hashPassword, comparePassword } from '../middleware/auth/bcrypt'
import { generate } from '../middleware/auth/JWT'
import { createTokenService } from './token.service'

export const getAllUsersService = async () => {
  return await prisma.users.findMany({
    include: { posts: true }
  })
}

export const createUserservice = async (body: User) => {
  const password = await hashPassword(body.password)
  return prisma.users.create({
    data: {
      ...body,
      password
    }
  })
}

export const updateUserService = async (userId: string, body: User) => {
  return await prisma.users.update({
    where: { id: userId },
    data: {
      ...body
    }
  })
}

export const deleteUserService = async (userId: string) => {
  return await prisma.users.delete({
    where: { id: userId }
  })
}

export const findByEmailService = async (email: string) => {
  return await prisma.users.findUnique({
    where: { email },
    include: { posts: true }
  })
}

export const loginService = async (email: string, password: string) => {
  const user: any = await findByEmailService(email)
  if (!user) throw new Error('USER_NOT_FOUND')
  const isValidUser = await comparePassword(password, user.password)
  if (!isValidUser) throw new Error('INVALID_CREDENTIALS')
  const payload = {
    user: user.id,
    role: user.role
  }
  const token = generate(payload)
  const sessionToken = await createTokenService(token, user.id)
  return {
    ...payload,
    sessionId: sessionToken.id,
    token
  }
}

export const findByIdService = async (userId: string) => {
  return await prisma.users.findUnique({
    where: { id: userId },
    include: { posts: true }
  })
}
