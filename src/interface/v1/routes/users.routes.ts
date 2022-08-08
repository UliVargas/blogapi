import Router from 'express-promise-router'
import usersValidator from '../../middleware/validations/function/users'
import { createUser, getAllUsers, login, deleteUser, findById } from '../../controllers/users.controller'

const router = Router()

router
  .get(
    '/',
    getAllUsers
  )
  .get(
    '/:userId',
    findById
  )
  .post(
    '/',
    usersValidator.create,
    createUser
  )
  .delete(
    '/:userId',
    deleteUser
  )
  .post(
    '/login',
    usersValidator.login,
    login
  )

export default router
