import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';

dotenv.config();
// SECTION: User model class object :

const User = mongoose.model('users');

// SECTION: PassportJs Google Strategy :

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      //- check if the user already exists in the DB :
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //- we already have a record of the user ...
          done(null, existingUser);
        } else {
          //- Create User Class instance :
          new User({
            googleId: profile.id,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });

      console.log(profile);
    }
  )
);

// SECTION: serializeUser and deserialize : cookie setup :

//- Call serializeUser with the userid , 'MongoDb's id for the user ' to generate the identifying piece of info 'Tocken'

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// REMEMBER: passport will now setup the user cookie automatically ..

//- getting back the id = user.id already passed to the serializeUser fct
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
