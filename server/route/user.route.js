import express from 'express'
import {
    createUser,
    getUsers,
    patchUser,
    removeUser
} from '../controller/user.controller'

const router = express.Router()

router.route('/api/users')
    .get(getUsers)
    .post(createUser)

router.route('/api/users/:id')
    .patch(patchUser)
    .delete(removeUser)

export default router