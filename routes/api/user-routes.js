const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//get and post user
router.route('/').get(getAllUsers).post(createUser);

//get, put, delete by id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//add delete friends
router.route('/:id/friends/:friendsId').post(addFriend).delete(removeFriend);

module.exports = router;