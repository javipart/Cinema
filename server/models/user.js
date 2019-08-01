const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    document: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('users', userSchema);