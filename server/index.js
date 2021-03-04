const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')();
const db = require('./db');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found 😞');
});

(async () => {
  try {
    await db.connect();
    console.log('🏂 Successfully connected to MongoDB. 🏐');
    app.listen(PORT, (err) => {
      if (err) return console.log(err); // eslint-disable-line no-console
      console.log(`🏂 Server listening on port ${PORT} 🏐`); // eslint-disable-line no-console
    });
  } catch (error) {
    console.error('Connection error', error);
  }
})();
