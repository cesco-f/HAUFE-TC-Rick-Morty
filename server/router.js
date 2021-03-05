const router = require('express').Router();
const { register, login } = require('./controllers/auth.controller');
const {
  getCharacters,
  addCharacter,
  removeCharacter,
} = require('./controllers/characters.controller');
const { checkDuplicateUsernameOrEmail } = require('./middlewares/verifySignUp');
const { verifyToken } = require('./middlewares/authJwt');

router.post('/register', checkDuplicateUsernameOrEmail, register);
router.post('/login', login);
router.get('/characters', verifyToken, getCharacters);
router.put('/add-character/:charId', verifyToken, addCharacter);
router.put('/remove-character/:charId', verifyToken, removeCharacter);

module.exports = router;
