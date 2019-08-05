const mongoose = require('mongoose');
const turns = mongoose.model('turns');

const { Schema } = mongoose;

const chairSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  row: {
    type: String,
    required: true,
  },
  turn: {
      type: Schema.Types.ObjectId,
      ref: 'turns',
  }
});

module.exports = mongoose.model('chairs', chairSchema);
