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

/*

NOTE: 

- http://localhost:5000/auth/google : 
 will not work in by def in developement : 

- Solution :
 https://nextjs.org/docs/api-reference/next.config.js/rewrites

- in production : the react server does not exist anymore ...
http://localhost:5000/auth/google/callback?
code=4
%2F0AY0e-g4N2gzXCTL0uV56L9Suf0d66q2NPoOyZJqNDCytxGpUcK4vB8CyfLW9Uc4ekgYNXA
&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent#


*/
