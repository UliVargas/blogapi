import { Request, Response } from 'express'
import { createPostService, getAllPostsService } from '../services/posts.service'

export const createPost = async (req: Request, res: Response) => {
  const post = await createPostService(req.body)
  res.send(post)
}

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await getAllPostsService()
  res.send(posts)
}
