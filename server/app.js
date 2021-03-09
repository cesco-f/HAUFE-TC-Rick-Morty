const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.get('*', (_, res) => {
  res.status(404).send('Sorry, not found 😞');
});

module.exports = app;
