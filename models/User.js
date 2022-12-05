const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trime: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ]
    },
    {
      toJSON: {
          virtuals: true
      },
      id: false
    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User;