const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../db');

const secret = process.env.SECRET_KEY || 'here_is_your_secret_key';

const register = async (req, res) => {
  try {
    const user = new db.User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    await user.save();
    res.send({ message: 'User was registered successfully!' });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const user = await db.User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: token,
    });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

module.exports = { register, login };
