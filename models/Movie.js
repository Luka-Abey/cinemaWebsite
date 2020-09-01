const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    genre: String,
    cast : String,
    runningTime : Number,
    director : String,
    language : String,
    ageRating : String,
    description : String,
    showTime : String
});

module.exports = Movie = mongoose.model('movie', MovieSchema);