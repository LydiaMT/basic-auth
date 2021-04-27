'use strict';

const server = require('./src/server')

// ==================== 3RD PARTY DEPENDENCIES ==================== //
require('dotenv').config();
const mongoose = require('mongoose');

// ==================== TESTING PORTS ==================== //
const PORT = process.env.PORT || 3000;
// const MONGODB_URI = 'mongodb://localhost:27017/auth'

// ==================== START UP SERVER ==================== //
const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, options)
  .catch(error => console.error('Count not start server', error.message));

server.start(PORT);
