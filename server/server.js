const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser used as middleware
app.use(express.json())