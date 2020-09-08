const express = require('express');
const router = express.Router();
// bring in the item model
const Screening = require('../models/Screening');

// GET request to api/items, public access
router.get('/', (req, res) => {
    Screening.find()
        .then(screenings => res.json(screenings));
});

router.get("/:id", (req, res) => {
    Screening.find({ "name": req.params.id }, function(err, screenings) {
      if (err) {
        console.log(err);
      } else {
        res.json(screenings);
      }
    });
  });

router.get("/byId/:id", (req, res) => {
    Screening.find({ "_id": req.params.id }, function(err, screenings) {
      if (err) {
        console.log(err);
      } else {
        res.json(screenings);
      }
    });
  });

// POST request to api/items, public access
router.post('/', ({body}, res) => {
    const newScreening = new Screening(body);
    newScreening.save()
        .then(screening => res.json(screening)
        )
        .catch(err => res.status(404).json({success: false}));
});

// UPDATE
router.put('/:id', function(req, res) {
    var conditions = { "_id" : req.params.id };
    Screening.update(conditions, req.body).then(doc => {
        if (!doc){
            return res.status(404).end();
        }
        else{
            return res.status(200).json(doc);
        }
    }).catch(err => next(err));
});

module.exports = router;