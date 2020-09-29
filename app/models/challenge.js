const mongoose = require('mongoose')

const commentSchema = require('./comment')

const challengeSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  difficulty: {
    type: String
  },
  link: {
    type: String
  },
  hint: {
    type: String
  },
  complexity: {
    type: String
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
