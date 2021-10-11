const router = require('express').Router();
const passport = require('passport');
require('../passportSetup');

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    console.log('====>>>> name', req.user.displayName, '====>>>>> email', req.user.emails[0].value, '=====>>>>', req.user.photos[0].value)
    res.redirect('/');
  }
);
router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
