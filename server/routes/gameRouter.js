const router = require('express').Router();
const {
  Game,
  UserInGame,
  User,
  GameStatistic,
  sequelize,
  UserGamePanding,
} = require('../db/models');
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

  const userInGame = await UserInGame.create({
    gameid: game.id,
    userid: owner,
  });
  await GameStatistic.create({
    uigid: userInGame.id,
    position: 0,
    money: 5500,
    queue: 1,
  });
  // const userInGame = await Game.findOne({
  //   where: { id: game.id },
  //   include: User,
  // });
  // console.log(userInGame.User); //user witch create game
  //   // where: { id: game.id },
  //   include: User,
  // });

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

  const myGames = await UserInGame.findAll({ where: { userid } });

  res.json(myGames);
});

router.route('/start').post(async (req, res) => {
  const { key } = req.body;

  const game = await Game.findOne({ where: { key } });
  game.inprocess = true;

  res.json(game);
});

router.route('/add/users').post(async (req, res) => {
  const { userid, key } = req.body;

  const users = await User.findAll();
  const notMe = users.filter((el) => el.id != userid);

  const panding = await UserGamePanding.findAll({ where: { gamekey: key } });
  if (panding.length > 0) {
    const usersPandingFilter = notMe.filter((el) => {
      if (
        panding.findIndex((i) => {
          return i.id === el.id;
        }) != -1
      ) {
        return false;
      } else return true;
    });

    const user = usersPandingFilter.map((el) => {
      return { id: el.id, name: el.name };
    });

    return res.json(user);
  } else {
    const user = notMe.map((el) => {
      return { id: el.id, name: el.name };
    });
    return res.json(user);
  }
});

router.route('/panding').post(async (req, res) => {
  const { pandingid, key } = req.body;

  for (let i = 0; i < pandingid.length; i++) {
    await UserGamePanding.create({ userid: pandingid[i], gamekey: key });
  }
  res.sendStatus(200);
});

router.route('/users').post(async (req, res) => {
  const { key } = req.body;

  const [gameusers] = await sequelize.query(`
  select "Users".id, name,"GameStatistics".position, "GameStatistics".money,"GameStatistics".queue from "Users" 
  join "UserInGames" on "Users".id = "UserInGames".userid
  join "Games" on "UserInGames".gameid = "Games".id
  join "GameStatistics" on "UserInGames".id = "GameStatistics".uigid
  where "Games".key = '${key}'
   `);
  res.json(gameusers);
});

router.route('/userInGame').post(async (req, res) => {
  const { gameid, userid } = req.body;
  //max 4 person proverka

<<<<<<< HEAD
  await UserInGame.create({
    gameid,
    userid,
    position: 0,
    money: 5500,
    queue: (gameParty.length += 1),
  });
  //max 4 person proverka
  const userInGame = await User.findAll({
    where: { gameid },
    include: Game,
  });
  // console.log(user[0].Games[0].UserInGames);

  myEmitter.emit(NEW_PERSON, userInGame);
  res.sendStatus(200);
=======
  const gameParty = await User.findAll({
    include: {
      model: Game,
      where: { id: gameid },
    },
  });

  for (let i = 0; i < gameParty.length; i++) {
    if (gameParty[i].id !== userid) {
      const userInGame = await UserInGame.create({
        gameid,
        userid,
      });

      await GameStatistic.create({
        uigid: userInGame.id,
        position: 0,
        money: 5500,
        queue: 1,
      });
      const [test] = await sequelize.query(`
      select "Users".id, name,"GameStatistics".position, "GameStatistics".money,"GameStatistics".queue from "Users"
      join "UserInGames" on "Users".id = "UserInGames".userid
      join "GameStatistics" on "UserInGames".id = "GameStatistics".uigid
      where "UserInGames".gameid = ${gameid}
       `);

      myEmitter.emit(NEW_PERSON, test);
      return res.sendStatus(200);
    } else return res.sendStatus(403);
  }
>>>>>>> ad2432ed7209f6743f528e7a39dcf845220e346f
});

module.exports = router;
