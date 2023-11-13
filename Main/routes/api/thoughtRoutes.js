const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .put(updateThought)
  .get(getSingleThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);


router
  .route('/:studentId/reactions/:assignmentId')
  .delete(removeReaction);

module.exports = router;
