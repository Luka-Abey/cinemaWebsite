const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commentBody: String,
    name: String,
    email : String,
    movieId : String,
    date : {type: Date,
        default: Date.now}
});

module.exports = Comment = mongoose.model('comment', CommentSchema);