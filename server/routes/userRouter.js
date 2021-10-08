const router = require('express').Router();
const bcrypt = require('bcrypt');
const { regexp } = require('sequelize/types/lib/operators');
const { User } = require('../db/models');

router.route('/reg').post(async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const hashPass = await bcrypt.hash(password, process.env.SALT);
    try {
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };
      return res.json({ user: req.session.user });
    } catch (error) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
});
router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          telegram: currentUser.telegram,
        };
        return res.json({ user: req.session.user });
      }
      return res.sendStatus(401);
    } catch (err) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
});

router.get();

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
