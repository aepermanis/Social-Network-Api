const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      Required: true,
    },
    reactions: [{type: Schema.ObjectId, ref: 'Reaction'}]
  },
  {
    timestamps: true,
       toJSON: { getters: true, virtuals: true }
  }
);

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      Required: true,
      max_length: 280,
    },
    username: {
      type: String,
      Required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
)

thoughtSchema.virtual('firstCount').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
