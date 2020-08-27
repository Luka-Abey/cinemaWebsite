const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    title: String,
    price: String,
    location: [{
        aisle: Number,
        shelf: Number
    }],
    dateAdded: {
        type: Date,
        default: Date.now
    },
    onSale: Boolean
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
