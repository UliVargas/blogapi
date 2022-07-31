import { Post } from '../entities/post.entity'
import { PostsModel, UsersModel } from '../database/orm/sequelize/models'

export const createPostService = async (body: Post) => {
  return await PostsModel.create({
    ...body
  })
}

export const getAllPostsService = async () => {
  const posts = await PostsModel.findAll({
    include: UsersModel
  })

  return posts.map(post => toResponse(post.toJSON()))
}

const toResponse = (response: Post) => {
  delete response.UserId
  return response
}
