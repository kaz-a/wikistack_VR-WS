const db = require( './db' );
const Page = require( './Page' );
const User = require( './User' );

const sync = function () {
  return db.sync({ force: true });
}

const seed = function () {
  return sync()
};

module.exports = { seed, models: { Page, User } };
