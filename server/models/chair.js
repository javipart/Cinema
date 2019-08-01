const mongoose = require('mongoose');
const chairs = mongoose.model('chairs');

const { Schema } = mongoose;

const chairSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  row: {
    type: Number,
    required: true,
  },
  turn: {
      type: Schema.Types.ObjectId,
      ref: 'chairs',
  }
});

module.exports = mongoose.model('chairs', chairSchema);
