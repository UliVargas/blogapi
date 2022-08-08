import Router from 'express-promise-router'
import { createPost, getAllPosts } from '../../controllers/posts.controller'

const router = Router()

router
  .get(
    '/',
    getAllPosts
  )
  .post(
    '/',
    createPost
  )

export default router
