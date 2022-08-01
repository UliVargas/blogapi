import Router from 'express-promise-router'
import usersValidator from '../../middleware/validations/function/users'
import { createUser, getAllUsers, login } from '../../controllers/users.controller'

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
  .post(
    '/login',
    usersValidator.login,
    login
  )

export default router
