const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  /*
  From the user take just the id (to minimize the cookie size) and just pass the id of the user
  to the done callback
  PS: You dont have to do it like this its just usually done like this
  */
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  /*
  Instead of user this function usually recives the id 
  then you use the id to select the user from the db and pass the user obj to the done callback
  PS: You can later access this data in any routes in: req.user
  */
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: "120504265045-epuup284aef776dnmmdq93cc3q1kknf8",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // console.log(profile.displayName, profile.emails[0].value, profile.photos[0].value)
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
    return done(null, profile);
  }
));
