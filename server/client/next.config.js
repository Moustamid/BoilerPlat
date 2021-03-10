module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth/google',
        destination: `http://localhost:5000/auth/google`,
      },
    ];
  },
};

// NOTE:

//- http://localhost:5000/auth/google :
// will not work by def in developement :

//-Ajax request : on same domain ok ...
// network request to http://localhost:5000/ is a CORS request

//! Solution : documentation
// https://nextjs.org/docs/api-reference/next.config.js/rewrites

//- in production : the react server does not exist anymore ...
// we wll be making request on the same domain
