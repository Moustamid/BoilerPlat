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
