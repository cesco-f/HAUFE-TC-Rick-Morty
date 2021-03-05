const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const db = require('./db');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(router);
app.get('*', (_, res) => {
  res.status(404).send('Sorry, not found 😞');
});

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
