const express = require('express');
const router = express.Router();

// bring in the item model
const Movie = require('../models/Movie');

// GET request to api/items, public access
router.get('/', (req, res) => {
    Movie.find()
        .sort({ date: 1})
        .then(movies => res.json(movies));
});

// POST request to api/items, public access
router.post('/', ({body}, res) => {
    const newMovie = new Movie(body);
    newMovie.save()
        .then(movie => res.json(movie));
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