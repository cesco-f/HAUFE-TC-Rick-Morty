const db = require('./../db');

const getUser = async (req, res) => {
  try {
    const user = await db.User.findById(req.userId);
    res.status(200).send({ favList: user.favList, username: user.username });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

const addCharacter = async (req, res) => {
  try {
    const { charId } = req.params;
    const user = await db.User.findOneAndUpdate(
      { _id: req.userId },
      { $addToSet: { favList: charId } },
      { new: true },
    );
    res.status(200).send({ favList: user.favList, username: user.username });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

const removeCharacter = async (req, res) => {
  try {
    const { charId } = req.params;
    const user = await db.User.findOneAndUpdate(
      { _id: req.userId },
      { $pull: { favList: charId } },
      { new: true },
    );
    res.status(200).send({ favList: user.favList, username: user.username });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

module.exports = { getUser, addCharacter, removeCharacter };
