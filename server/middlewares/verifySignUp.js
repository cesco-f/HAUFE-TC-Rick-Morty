const db = require('../db');

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  db.User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: 'Failed! Username is already in use!' });
      return;
    }

    // Email
    db.User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: 'Failed! Email is already in use!' });
        return;
      }

      next();
    });
  });
};

module.exports = { checkDuplicateUsernameOrEmail };
