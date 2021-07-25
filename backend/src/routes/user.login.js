const { Router } = require('express');
const router = Router();
const passport = require('passport');

const { isAuth } = require('../validations/auth');

router.post('/login', passport.authenticate('local'), async (req, res) => {
  console.log('User Logged in!');
  res.status(200).send('User Logged in!');
});

router.get('/logout', isAuth, (req, res) => {
  req.logout();
  console.log('User Logged Out');
  res.status(200).send('User Logged Out!');
});

module.exports = router;
