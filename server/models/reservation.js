const mongoose = require('mongoose');
const users = mongoose.model('users');
const chairs = mongoose.model('chairs');
const { Schema } = mongoose;

const reservationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  chair: [{
      type: Schema.Types.ObjectId,
      ref: "chairs",
  }],
  value: {
      type: Number,
      required: true,
  }
});

module.exports = mongoose.model('turns', reservationSchema);
