const router = require('express').Router();
const { register, login } = require('./controllers/auth.controller');
const { getCharacters } = require('./controllers/characters.controller');
const {
  getUser,
  addCharacter,
  removeCharacter,
} = require('./controllers/user.controller');
const { checkDuplicateUsername } = require('./middlewares/verifySignUp');
const { verifyToken } = require('./middlewares/authJwt');

router.post('/register', checkDuplicateUsername, register);
router.post('/login', login);
router.get('/user', verifyToken, getUser);
router.get('/characters', verifyToken, getCharacters);
router.put('/add-character/:charId', verifyToken, addCharacter);
router.put('/remove-character/:charId', verifyToken, removeCharacter);

module.exports = router;
