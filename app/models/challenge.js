const mongoose = require('mongoose')

const commentSchema = require('./comment')

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    required: true
  },
  complexity: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ownerName: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('challenge', challengeSchema)
