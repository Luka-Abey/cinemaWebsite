const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
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

module.exports = Movie = mongoose.model('movie', MovieSchema);
