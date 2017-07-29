const db = require( './db' );

const defineAttr = {
  title: {
    type: db.Sequelize.STRING
  },
  urlTitle: {
    type: db.Sequelize.STRING
  },
  content: {
    type: db.Sequelize.TEXT
  },
  status: {
    type: db.Sequelize.BOOLEAN
  }
};

const defineOptions = {};

const Page = db.define('page', defineAttr, defineOptions);

module.exports = Page;
