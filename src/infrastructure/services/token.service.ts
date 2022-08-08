import prisma from '../orm/prisma/client/prisma'

export const createTokenService = async (token: string, userId: string) => {
  return await prisma.accessToken.create({
    data: {
      token,
      userId
    }
  })
}

export const getAllTokensService = async () => {
  return await prisma.accessToken.findMany()
}
