const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponSchema = new Schema({
    code: String,
    discount: Number,
});

module.exports = mongoose.model('coupons', couponSchema);