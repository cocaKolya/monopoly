const router = require('express').Router();
const { Game, UserInGame } = require('../db/models');
const { v4: uuidv4 } = require('uuid');
const myEmitter = require('../src/ee');
const { NEW_GAME_CREATE } = require('../src/constants/event');

router.route('/add').post(async (req, res) => {
  const { owner } = req.body;
  const game = await Game.create({ key: uuidv4(), owner, inprocess: false });

  await UserInGame.create({
    gameid: game.id,
    userid: owner,
    position: 0,
    money: 5500,
    queue: 1,
  });
  myEmitter.emit(NEW_GAME_CREATE, game);
  res.sendStatus(game);
});
router.route('/del').post(async (req, res) => {
  const { userid, gameid } = req.body;
  await Game.destoy({ where: { gameid, userid } });
  res.sendStatus(200);
});
router.route('/').get(async (req, res) => {
  const game = await Game.findAll();
  res.json(game);
});
router.route('/checkGame').get(async (req, res) => {
  const gameParty = await UserInGame.findAll({ where: { gameid } });
  if (gameParty.length >= 4) res.json({ game: 'fullStack' });
  res.sendStatus(200);
});
router.route('/userInGame').post(async (req, res) => {
  const { gameid, userid } = req.body;
  const gameParty = await UserInGame.findOne({ where: { gameid } });

  await UserInGame.create({
    gameid,
    userid,
    position: 0,
    money: 5500,
    queue: (gameParty.length += 1),
  });
  res.sendStatus(200);
});

module.exports = router;
