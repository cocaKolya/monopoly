const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: "120504265045-epuup284aef776dnmmdq93cc3q1kknf8",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log('123');
    return done(null, profile);
  }
));
