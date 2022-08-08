import Router from 'express-promise-router'
import usersValidator from '../../middleware/validations/function/users'
import { createUser, getAllUsers, login, deleteUser, findById } from '../../controllers/users.controller'
import auth from '../../middleware/auth/JWT'

const router = Router()

router
  .get(
    '/',
    auth,
    getAllUsers
  )
  .get(
    '/:userId',
    auth,
    findById
  )
  .post(
    '/',
    usersValidator.create,
    createUser
  )
  .delete(
    '/:userId',
    auth,
    deleteUser
  )
  .post(
    '/login',
    usersValidator.login,
    login
  )

export default router
