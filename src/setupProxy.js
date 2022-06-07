const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
  app.use(
    createProxyMiddleware("/Api", {
      target:
        "https://maps.googleapis.com/maps/api/place/details/json", // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/Api": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};