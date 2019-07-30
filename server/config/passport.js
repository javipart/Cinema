const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(err, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        User.findOne({'local.email': email}, function (err, user) {
            if (err) { return done(err); }
            if (user) {
                return done(null, false, req.flash(''))
            }
        })
    }))
}