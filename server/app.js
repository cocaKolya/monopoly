require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const http = require('http');
const WebSocket = require('ws');

const redisClient = redis.createClient();

const PORT = 3001;
const app = express();
const map = new Map();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionParser = session({
//   name: 'sesid',
//   store: new RedisStore({ client: redisClient }),
//   saveUninitialized: false,
//   secret: 'mlkfdamfdskjnfsgnjk',
//   resave: false,
// });


// app.use(sessionParser);
// app.use((req, res, next) => {
//   res.locals.token = process.env.API;
//   if (req.session.user) {
//     res.locals.user = req.session.user;
//   }

//   next();
// });

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

// server.listen(PORT);

app.listen(PORT, (req, res) => {
  console.log('Server start on port ', PORT);
});

