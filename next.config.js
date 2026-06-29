const DESTINATION = 'https://www.brian-g.com/';

module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: DESTINATION,
        permanent: true,
      },
    ];
  },
};
