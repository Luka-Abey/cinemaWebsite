const mongoose, {Schema} = require('mongoose');

const BookingSchema = new Schema(
    {
      theaterId : 1,
      name : "Action Movie 5",
      description : "Another action movie",
      screeningTime : ISODate("2020-09-11T15:45:49.103Z"),
      adultPrice : 10,
      childPrice : 5,
      concessionPrice : 5,
      seatsAvailable : 80,
      // new Array(len).fill(0);
      seats : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]
      , "reservations" : [ {
            "_id": ObjectId("5500632d2dc02be024ba5c66")
          , "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ]
          , "price" : 10
          , "total" : 30
        } ]
    }
);

module.exports = Booking = mongoose.model('booking', BookingSchema);
