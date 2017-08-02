const db = require( './db' );

const defineAttr = {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
};

const defineOptions = {};

const User = db.define('user', defineAttr, defineOptions);

module.exports = User;
