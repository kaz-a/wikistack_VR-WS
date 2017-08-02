const express = require( 'express' );
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

module.exports = router
