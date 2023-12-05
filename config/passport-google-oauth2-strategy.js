const passport = require('passport');
const googleStretegy = require('passport-google-oauth').OAuth2Strategy;
// require crypto for generating random password

const crypto = require('crypto');
const User = require('../models/user.js');

// tell passport to use new stretegy for google login
passport.use(new googleStretegy({
        clientID: '152099550078-fpv97sf6qnla5b0uhd5iurihspvc748f.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3000/user/auth/google/callback',
        passReqToCallback: true,
    },
    async function(request, accessToken, refreseToken, profile, done) {

        try {
            const user = await User.findOne({ email: profile.emails[0].value });
            if (user) {
                return done(null, user);
            }
            if (!user) {
                // if not found, creat user and set it as req.user
                const newUser = await User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                })
                if (newUser) {
                    return done(null, newUser);
                }
            }
        } catch (error) {
            console.log('error in google stretegy passport', error);
        }
    }
));
module.exports = passport;

