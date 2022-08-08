import Router from 'express-promise-router'
import { getAllTokens } from '../../controllers/tokens.controller'

const router = Router()

router
  .get(
    '/',
    getAllTokens
  )

export default router
