const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    /*User.findById(id, function (err, user) {
        done(err, user);
    });*/
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CLIENT_CALLBACK
    },
    function (accessToken, refreshToken, profile, done) {
        //user profile info for profile id
        /*User.findOrCreate({
            googleId: profile.id
        }, function (err, user) {
            return done(err, user);
        })*/
        return done(null, profile);
    }
));