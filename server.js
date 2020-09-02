const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const movies = require('./api/movies');
const comments = require('./api/comments');
// const bookings = require('./api/bookings')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({ origin: true }));
  
// needed for bodyparser
app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err =>console.log(err))

// to use routes
app.use('/api/movies', movies);
app.use('/api/comments', comments);
// app.use('/api/bookings', bookings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))