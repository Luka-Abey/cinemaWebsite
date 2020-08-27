const express = require('express');
const mongoose = require('mongoose');

const movies = require('./api/movies');
const bookings = require('./api/bookings')
const app = express();

// needed for bodyparser
app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err =>console.log(err))

// to use routes
app.use('/api/movies', movies);
app.use('/api/bookings', bookings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))