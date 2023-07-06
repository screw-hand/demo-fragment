const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

/**
 * 
 * @param {*} params 
 * @returns 
 * 
 * @example
 */
const run = (params) => {
  const app = express();

  console.log('Server root path:', params.staticDir);

  // Serve static files from the specified directory
  app.use(express.static(params.staticDir));

  // Proxy requests to "/api" to the specified target
  app.use("/api", createProxyMiddleware({
      target: params.target,
      changeOrigin: true,
      secure: false,
      logLevel: 'debug'
    })
  );

  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(params.staticDir, 'index.html'));
  });

  app.listen(params.port, () => console.log(`Server is running on port ${params.port}`));

  return app;
}

module.exports = run;
exports.default = run;
