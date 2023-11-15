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
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: ObjectId,
        ref: 'user'
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    }
  }
);

userSchema.virtual('friendsCount').get(function () {
  console.log(this);
  return this.friends?.length;
});

const User = model('user', userSchema);

module.exports = User;
