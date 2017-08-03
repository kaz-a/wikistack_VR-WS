const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const User = db.models.User;
const Page = db.models.Page

router.get('/', function(req, res, next) {
  Page.findAll()
    .then(records => {
      res.send(records);
    })
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.post('/', function(req, res, next) {
  const page = Page.build({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
    urlTitle: req.url
  })
  page.save()
  .then(() => {
    res.redirect('/wiki');
  })
});

module.exports = router
