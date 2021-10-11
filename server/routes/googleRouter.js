const router = require('express').Router();
const passport = require('passport');
require('../passportSetup');

router.route('/').get((req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] });

  res.sendStatus(200);
});
router.route('/callback').get((req, res) => {
  passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
      res.sendStatus(200);
    };
});
router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
