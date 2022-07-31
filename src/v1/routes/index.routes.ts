import Router from 'express-promise-router'
import usersRoutes from './users.routes'
import postsRoutes from './posts.routes'

const router = Router()

router.use('/users', usersRoutes)
router.use('/posts', postsRoutes)

export default router
