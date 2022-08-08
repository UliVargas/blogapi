import Router from 'express-promise-router'
import { getAllTokens } from '../../controllers/tokens.controller'

import auth from '../../middleware/auth/JWT'

const router = Router()

router
  .get(
    '/',
    auth,
    getAllTokens
  )

export default router
