const mongoose = require('mongoose');
const movies = mongoose.model('movies');
const { Schema } = mongoose;

const turnSchema = new Schema({
  room: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movies',
  },
});

module.exports = mongoose.model('turns', turnSchema);
