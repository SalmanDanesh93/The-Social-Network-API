const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dataFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            require: 'Please leave a thought to proceed.',
            minlength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            require: true
        },
        reactions: [reactionSchema]
    },
    {
      toJSON: {
          getters: true
      },
      id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;