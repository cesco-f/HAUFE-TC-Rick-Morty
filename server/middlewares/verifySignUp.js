const db = require('../db');

const checkDuplicateUsername = async (req, res, next) => {
  try {
    // Check username
    const user = await db.User.findOne({
      username: req.body.username,
    });

    if (user) {
      res.status(400).send({ message: 'Failed! Username is already in use!' });
      return;
    }

    next();
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

module.exports = { checkDuplicateUsername };
