const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    blocks: [{
      type: Schema.Types.ObjectId,
      ref: 'Block'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }, 
    rating: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = Track = mongoose.model('Track', TrackSchema);