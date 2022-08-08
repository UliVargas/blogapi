import Router from 'express-promise-router'
import { createPost, getAllPosts } from '../../controllers/posts.controller'

import auth from '../../middleware/auth/JWT'

const router = Router()

router
  .get(
    '/',
    auth,
    getAllPosts
  )
  .post(
    '/',
    auth,
    createPost
  )

export default router
