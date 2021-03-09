const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await db.connect();
    console.log('🏂 Successfully connected to MongoDB. 🏐'); // eslint-disable-line no-console
    app.listen(PORT, (err) => {
      if (err) return console.log(err); // eslint-disable-line no-console
      console.log(`🏂 Server listening on port ${PORT} 🏐`); // eslint-disable-line no-console
    });
  } catch (error) {
    console.error('Connection error', error); // eslint-disable-line no-console
  }
})();
