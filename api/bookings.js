const express = require('express');
const router = express.Router();
// bring in the item model
const Booking = require('../models/Booking');
// GET request to api/items, public access
router.get('/', (req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings));
});

router.route("/:id", (req, res) => {
    Booking.find({ "bookingId": req.params.id }, function(err, bookings) {
      if (err) {
        console.log(err);
      } else {
        res.json(bookings);
      }
    });
  });

// POST request to api/items, public access
router.post('/', ({body}, res) => {
    const newBooking = new Booking(body);
    newBooking.save()
        .then(booking => res.json(booking)
        )
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;