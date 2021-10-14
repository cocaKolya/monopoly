const router = require('express').Router();
const passport = require('passport');
require('../passportSetup');

const { User } = require('../db/models');

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  async function (req, res) {
    if (
      req.user.displayName &&
      req.user.emails[0].value &&
      req.user.photos[0].value
    ) {
      try {
        console.log(req.user);
        const currentUser = await User.findOne({
          where: { email: req.user.emails[0].value },
        });
        console.log(currentUser, 'user');
        if (req.user.emails[0].value === currentUser.email) {
          console.log(req.user.emails);
          req.session.user = {
            id: currentUser.id,
            name: currentUser.name,
          };
          return res.clearCookie('sesid').redirect('http://localhost:3000/home');
        } else {
          console.log(2222);
          const newUser = User.create({
            name: req.user.displayName,
            email: req.user.emails[0].value,
            urlFoto: req.user.photos[0].value,
          });
          req.session.user = {
            id: newUser.id,
            name: newUser.name,
          };
        }

        return res.redirect('http://localhost:3000/home');
      } catch (error) {
        return res.sendStatus(405);
      }
    } else {
      return res.sendStatus(403);
    }
  }
);

module.exports = router;
//
