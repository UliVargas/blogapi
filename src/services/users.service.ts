import { User } from '../entities/user.entity'
import { PostsModel, UsersModel } from '../database/orm/sequelize/models'
import { hashPassword } from '../middleware/auth/bcrypt'

export const getAllUsersService = async () => {
  return await UsersModel.findAll({
    include: PostsModel
  })
}

export const createUserservice = async (body: User) => {
  const password = await hashPassword(body.password)
  return UsersModel.create({
    ...body,
    password
  })
}

export const updateUserService = async (userId: string, body: User) => {
  return UsersModel.update({
    ...body
  }, {
    where: { id: userId }
  })
}

export const deleteUserService = async (userId: string) => {
  return UsersModel.destroy({
    where: { id: userId }
  })
}

export const findByEmail = async (email: string) => {
  return UsersModel.findOne({
    where: { email }
  })
}
