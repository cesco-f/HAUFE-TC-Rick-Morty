const mongoose = require('mongoose');
const isTest = process.env.NODE_ENV === 'test';

const db = {};
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbName = isTest
  ? process.env.DB_NAME || 'very_long_db_name'
  : process.env.DB_NAME_TEST || 'very_long_db_name_test';

db.connect = function () {
  return mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
db.User = require('./models/user.model');

module.exports = db;
