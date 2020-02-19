const path = require("path");

module.exports = {
  webpack(config, options) {
    const aliasedDirectories = ["components", "utils"];
    aliasedDirectories.forEach(dir => {
      config.resolve.alias[dir] = path.join(__dirname, dir);
    });

    return config;
  }
};