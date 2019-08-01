const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qualification: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('movies', movieSchema);
