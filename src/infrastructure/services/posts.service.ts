import { Post } from '../../core/entities/post.entity'
import prisma from '../orm/prisma/client/prisma'

export const createPostService = async (body: Post) => {
  return await prisma.posts.create({
    data: {
      ...body
    }
  })
}

export const getAllPostsService = async () => {
  const posts: any = await prisma.posts.findMany({
    include: { user: true }
  })

  return posts.map(post => toResponse(post.toJSON()))
}

const toResponse = (response: Post) => {
  delete response.UserId
  return response
}
