"use strict";

const Metro = require("metro");

// We first load the config from the file system
Metro.loadConfig().then(async (config) => {
  if (process.argv.includes("--build")) {
    await Metro.runBuild(config, {
      entry: "src/index.js",
      out: "dist",
      platform: "web",
      sourceMap: false,
      minify: false,
      dev: false,
    });
  }

  if (process.argv.includes("--dev")) {
    await Metro.runServer(config);  
  }
});
