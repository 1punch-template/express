module.exports = {
  apps: [
    {
      name: "express-ssr",
      script: "dist/server.js",
      exec_mode: "cluster",
      max_restarts: 5,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
