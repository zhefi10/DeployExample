
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = process.env.MONGO_DB_URL;

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
