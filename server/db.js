const mongoose = require('mongoose');

const db = {};
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'very_long_db_name';

db.mongoose = mongoose;
db.connect = function () {
  return mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
db.User = require('./models/user.model');

module.exports = db;
