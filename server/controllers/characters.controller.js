const fetch = require('node-fetch');

const getCharacters = async (req, res) => {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url, {
      method: 'GET',
    });
    const characters = await response.json();
    res.status(200).send(characters.results);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.status(500).send({ message: error });
  }
};

module.exports = { getCharacters };
