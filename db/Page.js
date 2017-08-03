const db = require( './db' );

const defineAttr = {
  title: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: db.Sequelize.STRING,
    allowNull: false,
    get() {
      return '/wiki' + this.getDataValue('urlTitle');
    }
  },
  content: {
    type: db.Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: db.Sequelize.STRING
  },
  date: {
    type: db.Sequelize.DATE,
    defaultValue: Date
  }
  // status: {
  //   type: db.Sequelize.ENUM({ values: ['open', 'closed'] })
  // }
  // status: {
  //   type: db.Sequelize.ENUM({ 'open', 'closed' )
  // }
};

const defineOptions = {
};

const Page = db.define('page', defineAttr, defineOptions);

module.exports = Page;
