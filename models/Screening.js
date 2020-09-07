const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScreeningSchema = new Schema({
      theaterId : String,
      name : String,
      screeningTime : String,
      seatsAvailable : Number,
      seats : { type: Schema.Types.Mixed, default:[ 
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }
    });

module.exports = Screening = mongoose.model('screening', ScreeningSchema);