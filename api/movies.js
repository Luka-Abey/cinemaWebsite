const express = require('express');
const router = express.Router();

// bring in the item model
const Movie = require('../models/Movie');

// GET request to api/items, public access
router.get('/', (req, res) => {
    Movie.find()
        .sort({ date: -1})
        .then(movies => res.json(movies));
});

// POST request to api/items, public access
router.post('/', (req, res) => {
    const newMovie = new Movie({
        name: req.body.name
    });
    newMovie.save()
        .then(item => res.json(item));
});

// DELETE request to api/items, public access
router.delete('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => movie.remove()
            .then(() => res.json({success: true}))
            )
            .catch(err => res.status(404).json({success: false}));
});

module.exports = router;