const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const User = db.models.User;
const Page = db.models.Page

router.get('/', function(req, res, next) {
  let pages;
  Page.findAll()
    .then(results => {
      pages = results;
      return User.findAll();
    })
    .then(users => {
      res.send([users, pages]);
    })
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next) {
  Page.findById(1)
  .then(page => {
    console.log('req.params: ', req.params.urlTitle);
    console.log(page)
    res.json(page);
  })
});

router.post('/', function(req, res, next) {
  const page = Page.build({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  })
  const user = User.build({
    name: req.body.name,
    email: req.body.email
  })
  page.save()
    .then(() => {
      return user.save()
    })
    .then(() => {
      res.redirect('/wiki');
    })
});

module.exports = router
