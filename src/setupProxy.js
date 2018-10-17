// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    proxy('/steamProxy', {
      target: 'https://api.steampowered.com',
      pathRewrite: {
        '^/steamProxy': '/',
      },
      changeOrigin: true,
    }),
  );
};
