const express = require('express');
const mongoose = require('mongoose');

const movies = require('./api/movies');
const comments = require('./api/comments');
const bookings = require('./api/bookings')
const screenings = require('./api/screenings')
const charge = require("./api/charge");

const app = express();
    
const cors = require('cors');
app.use(cors({ origin:true}));

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
app.use('/api/bookings', bookings);
app.use('/api/screenings', screenings);
app.use("/api/charge", charge);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))