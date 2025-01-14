const proxy = require('http-proxy-middleware');

// Rescrevo a rota da API do Bing para eliminar o problema com o CORS
module.exports = (app) => {
  app.use(
    '/bing-api',
    proxy({
      target: 'https://www.bing.com',
      changeOrigin: true,
      pathRewrite: { '^/bing-api': '' },
    }),
  );

  app.use(
    '/maps-api',
    proxy({
      target: 'https://maps.googleapis.com',
      changeOrigin: true,
      pathRewrite: { '^/maps-api': '' }
    }),
  );
};
