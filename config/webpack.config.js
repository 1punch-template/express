const nodeExternals = require("webpack-node-externals");

module.exports = (config, { isServer, isDev }) => {
  if (!isServer) {
    config.externals = [
      nodeExternals({
        allowlist: [
          /@1punch.*/,
          /react.*/,
          /webpack-hot-middleware.*/,
          /zustand.*/,
          /tldraw.*/,
        ],
      }),
    ];
  }
  if (isServer) {
    config.externals = [
      nodeExternals({
        allowlist: [/tldraw\.css/],
      }),
    ];
  }
  return config;
};
