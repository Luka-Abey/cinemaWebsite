const express = require('express');
const db = require('./db')
const movies = require('./api/movies');
const comments = require('./api/comments');
const bookings = require('./api/bookings')
const screenings = require('./api/screenings')

const app = express();
    
const cors = require('cors');
app.use(cors({ origin:true}));

// needed for bodyparser
app.use(express.json());

// to use routes
app.get('/api', (req, res) => res.send('hello world'));
app.use('/api/movies', movies);
app.use('/api/comments', comments);
app.use('/api/bookings', bookings);
app.use('/api/screenings', screenings);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;