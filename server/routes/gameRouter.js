const router = require('express').Router();
const { Game, UserInGame, User, GameStatistic } = require('../db/models');
const { v4: uuidv4 } = require('uuid');
const myEmitter = require('../src/ee');
const { NEW_GAME_CREATE, NEW_PERSON } = require('../src/constants/event');

router.route('/').get(async (req, res) => {
  const game = await Game.findAll();
  game.filter((el) => !el.inprocess);
  res.json(game);
});

router.route('/checkGame').get(async (req, res) => {
  const { gameid } = req.body;
  const gameParty = await UserInGame.findAll({ where: { gameid } });
  if (gameParty.length >= 4) res.json({ game: 'fullStack' });
  res.sendStatus(200);
});

router.route('/add').post(async (req, res) => {
  const { owner } = req.body;

  const game = await Game.create({
    key: uuidv4(),
    owner,
    inprocess: false,
  });

  await UserInGame.create({
    gameid: game.id,
    userid: owner,
    position: 0,
    money: 5500,
    queue: 1,
  });
  // const userInGame = await Game.findOne({
  //   where: { id: game.id },
  //   include: User,
  // });
  // console.log(userInGame.User); //user witch create game
  myEmitter.emit(NEW_GAME_CREATE, game);
  res.json(game);
});

router.route('/del').post(async (req, res) => {
  const { userid, gameid } = req.body;
  await Game.destoy({ where: { gameid, userid } });
  res.sendStatus(200);
});

router.route('/mygame').post(async (req, res) => {
  const { userid } = req.body;
  const mygame = await UserInGame.findAll({ where: { userid } });
  res.json(mygame);
});

router.route('/userInGame').post(async (req, res) => {
  const { gameid, userid } = req.body;
  const gameParty = await UserInGame.findOne({ where: { gameid } });

  const userInGame = await UserInGame.create({
    gameid,
    userid,
  });
  const userStatistic = await GameStatistic.create({
    uigid: userInGame.id,
    position: 0,
    money: 5500,
    queue: (gameParty.length += 1),
  });

  //max 4 person proverka
  const user = await UserInGame.findOne({
    where: { gameid },
    include: GameStatistic,
  });
  console.log(user);
  // console.log(user[0].Games[0].UserInGames);

  // myEmitter.emit(NEW_PERSON, userInGame);
  res.sendStatus(200);
});

module.exports = router;
