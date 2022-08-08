import Router from 'express-promise-router'
import usersRoutes from './users.routes'
import postsRoutes from './posts.routes'
import accessTokensRoutes from './accessTokens.routes'

const router = Router()

router.use('/users', usersRoutes)
router.use('/posts', postsRoutes)
router.use('/accessTokens', accessTokensRoutes)

export default router
