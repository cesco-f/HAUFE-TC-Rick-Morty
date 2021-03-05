const fetch = require('node-fetch');
const db = require('./../db');

const getCharacters = async (req, res) => {
  try {
    const user = await db.User.findById(req.userId);
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url, {
      method: 'GET',
    });
    const characters = await response.json();
    const userCharacters = characters.results.map((character) => {
      return {
        ...character,
        favList: user.favList.includes(character.id) ? true : false,
      };
    });
    res.status(200).send(userCharacters);
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
    res.status(200).send({ user, charId });
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
    res.status(200).send({ user, charId });
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

module.exports = { getCharacters, addCharacter, removeCharacter };
