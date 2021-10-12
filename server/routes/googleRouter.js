const router = require('express').Router();
const passport = require('passport');
require('../passportSetup');

const { User } = require('../db/models');

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    if (req.user.displayName && req.user.emails[0].value && req.user.photos[0].value) {
      try {
        const newUser = User.create({
          name: req.user.displayName,
          email: req.user.emails[0].value,
          urlFoto: req.user.photos[0].value,
        });
        req.session.user = {
          id: newUser.id,
          name: newUser.name,
        }
        return res.redirect('http://localhost:3000');
      } catch (error) {
        return res.sendStatus(405);
      }
    } else {
      return res.sendStatus(403);
    }
  });

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
//
