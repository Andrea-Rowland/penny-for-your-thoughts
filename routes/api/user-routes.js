const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
    // bonus: remove a user's associate thoughts when deleted
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
// example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add a friend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
