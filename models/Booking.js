const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
      theaterId : String,
      filmTitle : String,
      name : String,
      screeningTime : String,
      totalPrice : Number,
      seats : { type:Schema.Types.Mixed, default:[ 
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] },
    });

module.exports = Booking = mongoose.model('booking', BookingSchema);
