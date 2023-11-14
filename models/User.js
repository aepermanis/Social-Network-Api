const { Schema, model } = require('mongoose');


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
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
   
  }
);

userSchema.virtual('firstCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
