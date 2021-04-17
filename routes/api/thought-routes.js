const router = require('express').Router();
const { getAllThought,
        getThoughtById,
        addThought, 
        updateThought,
        removeThought,
        addReaction,
        removeReaction
} = require('../../controllers/thought-controller');


/////// /api/thoughts/////////////
router
  .route('/')
  .get(getAllThought)
  .post(addThought)

//////////// /api/thoughts/<userId>//////////
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

//reaction routes///////// 
router
.route('/:id/reactions')
.post(addReaction)

router
.route('/:id/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;