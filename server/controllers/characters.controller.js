const getCharacters = (req, res) => {
  console.log('req.userId :>> ', req.userId);
  res.sendStatus(201);
};

module.exports = { getCharacters };
