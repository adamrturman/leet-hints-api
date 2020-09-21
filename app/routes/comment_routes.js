const express = require('express')
const router = express.Router()
const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

// require challenge model
const Challenge = require('./../models/challenge')
const handle404 = require('./../../lib/custom_errors')

// CREATE
// POST /comments/
router.post('/challenges/:id/comments', requireToken, (req, res, next) => {
  // get the comment data from the body of the request
  const commentData = req.body.comment
  commentData.owner = req.user._id
  // get the challenge id from the body
  const challengeId = req.params.id
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
router.delete('/challenges/:id/comments/:comment_id', requireToken, (req, res, next) => {
  const challengeId = req.params.id
  const commentId = req.params.comment_id
  console.log('this is req.params.id', req.params.id)
  console.log('this is req.params.comment_id', req.params.comment_id)
  Challenge.findById(challengeId)
    .then(handle404)
    .then(challenge => {
      challenge.comments.id(commentId).remove()
      // Alternatively
      // challenges.comments.pull(id)
      console.log('this is commentId', commentId)
      return challenge.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /comments/:id
router.patch('/challenges/:id/comments/:comment_id', requireToken, (req, res, next) => {
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
