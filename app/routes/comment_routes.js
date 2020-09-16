const express = require('express')
const router = express.Router()

// require challenge model
const Challenge = require('./../models/challenge')
const handle404 = require('./../lib/custom_errors')

// CREATE
// POST /comments/
router.post('/comments', (req, res, next) => {
  // get the comment data from the body of the request
  const commentData = req.body.comment
  // get the challenge id from the body
  const challengeId = commentData.challengeId
  // find the challenge by its id
  Challenge.findById(challengeId)
    .then(handle404)
    .then(challenge => {
      // add comment to challenge
      challenge.comments.push(commentData)
      // save challenge
      return challenge.save()
    })
    // send responsne back to client
    .then(challenge => res.status(201).json({challenge: challenge}))
    .catch(next)
})

// DESTROY
// DELETE /comments/:id
router.delete('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Challenge.findOne({ 'comments._id': id })
    .then(handle404)
    .then(challenge => {
      challenge.comments.id(id).remove()
      // Alternatively
      // challenges.comments.pull(id)

      return challenge.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /comments/:id
router.patch('/comments/:id', (req, res, next) => {
  const id = req.params.id
  const commentData = req.body.comment

  Challenge.findOne({
    'comments._id': id
  })
    .then(handle404)
    .then(challenge => {
      const comment = challenge.comments.id(id)
      comment.set(commentData)
      return challenge.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
