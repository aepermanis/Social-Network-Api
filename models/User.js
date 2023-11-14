const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Types


// Schema to create User Model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: ObjectId,
        ref: 'Users',
      },
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    }
  }
);

userSchema.virtual('friendsCount').get(function () {
  return this.friend.length;
});

const User = model('user', userSchema);

module.exports = User;
