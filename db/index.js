const db = require( './db' );

const sync = function () {
  return db.sync({ force: true });
}

const seed = function () {
  return sync()
}

module.exports = { seed };
