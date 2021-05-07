

const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
