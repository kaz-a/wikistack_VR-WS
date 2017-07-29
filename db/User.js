const db = require( './db' );

const defineAttr = {
  name: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  }
};

const defineOptions = {};

const User = db.define('user', defineAttr, defineOptions);

module.exports = User;
