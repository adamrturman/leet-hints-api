const express = require('express')
const router = express.Router()

// require entry model
const Entry = require('./../models/entry')
const handle404 = require('./../lib/custom_errors')

// CREATE
// POST /comments/
router.post('/comments', (req, res, next) => {
  // get the comment data from the body of the request
  const commentData = req.body.comment
  // get the entry id from the body
  const entryId = commentData.entryId
  // find the entry by its id
  Entry.findById(entryId)
    .then(handle404)
    .then(entry => {
      // add comment to entry
      entry.comments.push(commentData)
      // save entry
      return entry.save()
    })
    // send responsne back to client
    .then(entry => res.status(201).json({entry: entry}))
    .catch(next)
})

// DESTROY
// DELETE /comments/:id
router.delete('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Entry.findOne({ 'comments._id': id })
    .then(handle404)
    .then(entry => {
      entry.comments.id(id).remove()
      // Alternatively
      // entrys.comments.pull(id)

      return entry.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /comments/:id
router.patch('/comments/:id', (req, res, next) => {
  const id = req.params.id
  const commentData = req.body.comment

  Entry.findOne({
    'comments._id': id
  })
    .then(handle404)
    .then(entry => {
      const comment = entry.comments.id(id)
      comment.set(commentData)
      return entry.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
