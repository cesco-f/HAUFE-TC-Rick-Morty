const router = require('express').Router();
const authController = require('./controllers/auth.controller');
const charactersController = require('./controllers/characters.controller');
const { checkDuplicateUsernameOrEmail } = require('./middlewares/verifySignUp');
const { verifyToken } = require('./middlewares/authJwt');

router.post(
  '/register',
  checkDuplicateUsernameOrEmail,
  authController.register,
);
router.post('/login', authController.login);
router.get('/characters', verifyToken, charactersController.getCharacters);
router.put(
  '/add-character/:id',
  verifyToken,
  charactersController.addCharacter,
);
router.put(
  '/remove-character/:id',
  verifyToken,
  charactersController.removeCharacter,
);

module.exports = router;
