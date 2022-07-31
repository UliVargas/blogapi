import Router from 'express-promise-router'
import usersValidator from '../../middleware/validations/function/users'
import { createUser, getAllUsers } from '../../controllers/users.controller'

const router = Router()

router
  .get(
    '/',
    getAllUsers
  )
  .post(
    '/',
    usersValidator.create,
    createUser
  )

export default router
