const fetch = require('node-fetch');
const db = require('./../db');

const getCharacters = async (req, res) => {
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
};

const addCharacter = async (req, res) => {
  const { id } = req.params;
  await db.User.updateOne({ _id: req.userId }, { $addToSet: { favList: id } });
  res.status(200).send({ id });
};

const removeCharacter = async (req, res) => {
  const { id } = req.params;
  await db.User.updateOne({ _id: req.userId }, { $pull: { favList: id } });
  res.status(200).send({ id });
};

module.exports = { getCharacters, addCharacter, removeCharacter };
