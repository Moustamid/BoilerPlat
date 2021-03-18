//-npm modules :
import passport from 'passport';

export const authRoutes = (app) => {
  //- Sending the client To google OAuth :
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  //-  client comming from google OAuth i.e 'our GoogleStrategy function' :

  app.get('/auth/google/callback', passport.authenticate('google'));

  //- logout route :

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //- client making a request  , client already authenticated with the google flow

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

// REMEMBER: passport automatically attaches the 'user' and 'logout()'  property and others to the  to the req
