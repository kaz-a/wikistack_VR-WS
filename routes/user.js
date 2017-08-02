const express = require( 'express' );
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('got to GET /user/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /user/add');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /user/');
});

module.exports = router
