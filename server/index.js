const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors')();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) return console.log(err); // eslint-disable-line no-console
  console.log(`🏂 Server listening on port ${PORT} 🏐`); // eslint-disable-line no-console
});
