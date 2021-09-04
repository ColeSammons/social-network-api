const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//get and post thoughts
router.route('/').get(getAllThoughts).post(createThought);

//get, put, delete thoughts
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

//post reactions
router.route('/:thoughtId/reactions').post(addReaction);

//delete reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;