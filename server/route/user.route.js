const express = require('express');
const {
    createUser,
    getUsers,
    patchUser,
    removeUser
} = require('../controller/user.controller');

const router = express.Router();

router.route('/api/users')
    .get(getUsers)
    .post(createUser);

router.route('/api/users/:id')
    .patch(patchUser)
    .delete(removeUser);

module.exports = router;