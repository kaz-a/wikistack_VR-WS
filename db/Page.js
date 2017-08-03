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
      return '/wiki/' + this.getDataValue('urlTitle');
    }
  },
  content: {
    type: db.Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: db.Sequelize.STRING
  }
  // status: {
  //   type: db.Sequelize.ENUM({ values: ['open', 'closed'] })
  // }
  // status: {
  //   type: db.Sequelize.ENUM({ 'open', 'closed' )
  // }
};

const defineOptions = {
  hooks: {
    beforeValidate: (page) => {
      if (page.title) {
        // Removes all non-alphanumeric characters from title
        // And make whitespace underscore
        page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
      } else {
        // Generates random 5 letter string
        page.urlTitle = Math.random().toString(36).substring(2, 7);
      }
    }
  }
};

const Page = db.define('page', defineAttr, defineOptions);

module.exports = Page;
