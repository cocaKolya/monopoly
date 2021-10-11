require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')


const passport = require('passport')
require('./passportSetup')

// session
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();


const http = require('http');
const WebSocket = require('ws');


const PORT = 3001;
const app = express();
const map = new Map();

const checkUser = require('./middleware/checkUser');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sessionParser = session({
  name: 'sesid',
  store: new RedisStore({ client: redisClient }),
  saveUninitialized: false,
  secret: 'mlkfdamfdskjnfsgnjk',
  resave: false,
});

app.use(sessionParser);

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    console.log('====>>>> name', req.user.displayName, '====>>>>> email', req.user.emails[0].value, '=====>>>>', req.user.photos[0].value)
    next();
  } else {
    res.sendStatus(401);
  }
}

// Example protected and unprotected routes
app.get('/', (req, res) => res.send('Example Home page!'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

app.use(express.static(path.join(__dirname, 'public')));


// app.use((req, res, next) => {
//   res.locals.token = process.env.API;
//   if (req.session.user) {
//     res.locals.user = req.session.user;
//   }

//   next();
// });
// app.use(sessionParser)

app.use(checkUser);

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

// server.listen(PORT);

app.listen(PORT, (req, res) => {
  console.log('Server start on port ', PORT);
});

