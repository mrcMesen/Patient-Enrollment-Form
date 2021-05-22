module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/enrollment',
        permanent: true,
      },
    ];
  },
};
