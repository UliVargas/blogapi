import { User } from '../entities/user.entity'
import { PostsModel, UsersModel } from '../database/orm/sequelize/models'

export const getAllUsersService = async () => {
  return await UsersModel.findAll({
    include: PostsModel
  })
}

export const createUserservice = async (body: User) => {
  return UsersModel.create({
    ...body
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
