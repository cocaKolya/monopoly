require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const http = require('http');
const WebSocket = require('ws');

const { User, Game, UserInGame } = require('./db/models');
const userRouter = require('./routes/userRouter');
const gameRouter = require('./routes/gameRouter');

const redisClient = redis.createClient();

const PORT = 3001;
const app = express();
const map = new Map();

const sessionParser = session({
  name: 'sesid',
  store: new RedisStore({ client: redisClient }),
  saveUninitialized: false,
  secret: process.env.SECRET,
  resave: false,
  cookie: {
    expries: 24 * 60 * 60e3,
    httpOnly: true,
  },
});

app.use(sessionParser);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.ORIGIN }));

app.use((req, res, next) => {
  res.locals.token = process.env.API;
  if (req.session.user) {
    res.locals.user = req.session.user;
  }

  next();
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

app.use('/user', userRouter);
app.use('/game', gameRouter);

// const user = await User.findAll({
//   include: Game,
// });
// console.log(user[0].Games[0].UserInGames);

//1
server.on('upgrade', function (request, socket, head) {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session?.user?.id) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });
});

//2
wss.on('connection', function (ws, request) {
  console.log('asdfasdfasdfasdfasdf');
  const userId = request.session.user.id;

  map.set(userId, ws);

  ws.on('message', async function (message) {
    const dataFromFront = JSON.parse(message);

    switch (dataFromFront.type) {
      case 'newGame':
        // try {
        //   const { name, owner } = dataFromFront.payload.myGame;
        //   try {
        //     const game = await Game.create({
        //       name,
        //       owner,
        //     });
        //     for (let [id, userConnect] of map) {
        //       userConnect.send(
        //         JSON.stringify({
        //           type: 'newGameCreate',
        //           payload: game,
        //         })
        //       );
        //     }
        //   } catch (err) {
        //     console.log(err);
        //     ws.send(
        //       JSON.stringify({
        //         type: 'err',
        //         payload: 'err',
        //       })
        //     );
        //   }
        // } catch (err) {
        //   console.log(err);
        //   ws.send(
        //     JSON.stringify({
        //       type: 'err',
        //       payload: 'err',
        //     })
        console.log(dataFromFront);
        //   );
        // }
        break;

      default:
        break;
    }
  });

  ws.on('close', function () {
    map.delete(userId);
  });
});

server.listen(PORT, (req, res) => {
  console.log('Server start on port ', PORT);
});
