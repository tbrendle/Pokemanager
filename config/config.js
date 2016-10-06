var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pokemanaging'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:root@localhost:8889/pokemon'
  },

  test: {
    root: rootPath,
    app: {
      name: 'pokemanaging'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/pokemanaging-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'pokemanaging'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/pokemanaging-production'
  }
};

module.exports = config[env];
