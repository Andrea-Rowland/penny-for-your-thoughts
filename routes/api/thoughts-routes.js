const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);
//     example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

//  Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    

router
    .route('/:thoughtId/:userId')
    .delete(deleteThought)



router
.route('/:thoughtId/reactions')
.post(addReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

    module.exports = router;